import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Upload, FileText, Loader2 } from 'lucide-react';

interface SupportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SupportDialog({ open, onOpenChange }: SupportDialogProps) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const userEmail = localStorage.getItem('userEmail'); // Get from context/auth

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      
      // Validate file size (5MB max per file)
      const validFiles = selectedFiles.filter(file => {
        if (file.size > 5 * 1024 * 1024) {
          setError(`${file.name} exceeds 5MB limit`);
          return false;
        }
        return true;
      });

      // Max 5 files
      if (files.length + validFiles.length > 5) {
        setError('Maximum 5 files allowed');
        return;
      }

      setFiles(prev => [...prev, ...validFiles]);
      setError('');
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!subject.trim()) {
      setError('Subject is required');
      return;
    }
    
    if (!description.trim()) {
      setError('Description is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('subject', subject);
      formData.append('description', description);
      formData.append('phoneNumber', phoneNumber);
      formData.append('email', userEmail);

      // Append files
      files.forEach(file => {
        formData.append('attachments', file);
      });

      // Debug: Log what we're sending
      console.log('Sending data:', {
        subject,
        description,
        phoneNumber,
        email: userEmail,
        filesCount: files.length
      });

      const response = await fetch('https://record-backend-psi.vercel.app/api/support', {
        method: 'POST',
        body: formData,
        // Note: Don't set Content-Type header, browser will set it with boundary
      });

      const data = await response.json();
      
      // Debug: Log response
      console.log('Response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit support request');
      }

      setSuccess(true);
      
      // Reset form
      setSubject('');
      setDescription('');
      setPhoneNumber('');
      setFiles([]);

      // Close dialog after 2 seconds
      setTimeout(() => {
        setSuccess(false);
        onOpenChange(false);
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    const validFiles = droppedFiles.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        setError(`${file.name} exceeds 5MB limit`);
        return false;
      }
      return true;
    });

    if (files.length + validFiles.length > 5) {
      setError('Maximum 5 files allowed');
      return;
    }

    setFiles(prev => [...prev, ...validFiles]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px] max-h-[90vh] p-0 rounded-2xl overflow-hidden">
        <div className="sticky top-0 bg-white z-10 px-8 pt-8 pb-4 border-b border-gray-100">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 rounded-full p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              We're here to help!
            </DialogTitle>
            <p className="text-gray-600 text-sm font-normal">
              Share your issue in detail so we can resolve it quickly.
            </p>
          </DialogHeader>
        </div>

        <div className="overflow-y-auto px-8 py-6" style={{ maxHeight: 'calc(90vh - 140px)' }}>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4">
            ✅ Support request submitted successfully!
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Subject <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Type a short summary of your issue"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="h-12 bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Describe your problem <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder="Tell us what happened in detail"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[120px] bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg resize-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Add Screenshot / File
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors cursor-pointer"
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                Drag & drop files here or click to browse
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Max 5 files, 5MB each (Images, PDF, DOC)
              </p>
              <input
                id="file-input"
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <span className="text-xs text-gray-400">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-2 block">Contact Number</label>
            <div className="flex gap-2">
              <Input
                type="text"
                value="+91"
                readOnly
                className="w-16 h-12 bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg text-center"
              />
              <Input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 h-12 bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg"
              />
            </div>
          </div>

          <p className="text-sm text-gray-600">
            We'll reply to this support request at :{' '}
            <span className="font-medium">{userEmail}</span>
          </p>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}