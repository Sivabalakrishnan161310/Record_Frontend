import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const { signup, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
    await signup(name, email, password);
    setShowSuccessPopup(true);
    
    // Navigate after a delay to show the popup
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  } catch (err: any) {
      setError(err.response?.data?.message || 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      await googleLogin(credentialResponse.credential);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Google sign up failed.');
    }
  };

  const handleGoogleError = () => {
    setError('Google sign up failed. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[580px] bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div className="flex justify-center mb-8">
          <img src="/raecod.webp" alt="Record" className="h-12" />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Join Record!</h1>
          <p className="text-gray-600 text-lg">Let's open your skill repository.</p>
        </div>

        {showSuccessPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full mx-4 animate-fade-in">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Signup Successful!</h3>
        <p className="text-gray-600 text-sm">Your account has been created. Redirecting to login...</p>
      </div>
    </div>
  </div>
)}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
            className="h-14 bg-gray-50 border-0 text-gray-900 placeholder:text-gray-400 text-base rounded-xl"
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="h-14 bg-gray-50 border-0 text-gray-900 placeholder:text-gray-400 text-base rounded-xl"
          />

          <Input
            type="password"
            placeholder="Password (min. 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={loading}
            className="h-14 bg-gray-50 border-0 text-gray-900 placeholder:text-gray-400 text-base rounded-xl"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              text="signup_with"
              width="100%"
            />
          </div>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium">
            Sign in.
          </Link>
        </p>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500">
            By signing up, I accept the © Record.{' '}
            <a href="#" className="text-gray-700 font-medium hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-gray-700 font-medium hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}