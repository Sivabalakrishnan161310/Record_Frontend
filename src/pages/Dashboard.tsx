import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LayoutDashboard,
  User,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Settings,
  Send,
  LifeBuoy,
  Bell,
  Plus,
  Share2,
  ChevronRight,
  PlayCircle,
  List,
  Menu,
  X,
} from 'lucide-react';
import SupportDialog from '@/components/SupportDialog';

export default function Dashboard() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 h-screen`}>
        {/* Mobile close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <img src="/raecod.webp" alt="Record" className="h-8" />
          </div>
          <p className="text-xs text-gray-500">v1.0.1</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 w-full text-black bg-white rounded-lg transition-colors"
            
          >
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Profile</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
          >
            <Lightbulb className="w-5 h-5" />
            <span className="text-sm font-medium">Skill Repository</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium">Learnings</span>
          </a>

          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Jobs</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              Offers
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              Applied
            </a>
          </div>

          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Tools</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              YouTube to Course
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              <span className="text-sm font-medium hover:font-semibold">One Click Resume</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
            <span className="text-sm font-medium hover:font-semibold">AI Assessment</span>
            </a>
          </div>
        </nav>

        <div className="p-3 border-t border-gray-100 space-y-1">

          <button
              onClick={() => setSupportOpen(true)}
              className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:text-black rounded-lg transition-colors"
            >
              <LifeBuoy className="w-5 h-5" />
              <span className="text-sm font-medium hover:font-semibold">Support</span>
          </button>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 w-full text-gray-500 bg-white hover:bg-orange-50 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
            <span className="text-sm font-medium">Feedback</span>
          </a>
        </div>

        <div className="p-4 text-xs text-gray-400 space-y-1">
          <div className="flex gap-2 flex-wrap">
            <a href="#" className="hover:text-gray-600">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-600">
              Terms & Conditions
            </a>
          </div>
          <p>© 2025 Record Innovation and Enterprises Pvt. Ltd.</p>
        </div>
      </aside>

      <main className="flex-1 overflow-auto min-h-screen w-full lg:w-auto">
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg mr-2"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-600 overflow-hidden">
            <span className="hidden sm:inline">Profile</span>
            <ChevronRight className="w-4 h-4 hidden sm:inline" />
            <span className="font-medium text-gray-900 truncate">Basic Info</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              className="h-9 px-2 sm:px-4 border-gray-200 hover:bg-gray-50 text-gray-700 font-medium text-sm"
            >
              <svg className="w-4 h-4 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="hidden sm:inline">Premium</span>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-orange-500 text-white hover:bg-white hover:text-black transition-colors">
              <Plus className="w-5 h-5" strokeWidth={3.5} />
            </Button>

            <Button 
              size="icon" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl border-0 bg-transparent hover:bg-white-100 text-gray-700 transition-all">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6"/>
            </Button>

            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Basic Profile</h1>
                  <Button variant="ghost" size="sm" className="text-white hover:text-gray-900 p-0 h-auto">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    How it works
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  Information about your profile, including all your personal details. You can also
                  add your social media links to your profile.
                </p>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-10 px-3 sm:px-4 border-gray-200 hover:bg-gray-50 text-gray-700 font-medium flex-1 sm:flex-initial"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Profile Share</span>
                  <span className="sm:hidden">Share</span>
                </Button>
                <Button className="h-10 px-4 sm:px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium flex-1 sm:flex-initial">
                  Save
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="w-full lg:w-64 space-y-6">
                <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden lg:mb-4 bg-gray-200 flex-shrink-0">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">Thilak</h2>
                </div>

                <nav className="space-y-1 hidden lg:block">
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-orange-500 rounded-lg font-medium text-sm"
                  >
                    Basic Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    Education
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    Work Experiences
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    Licenses & Certifications
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    Other Activities
                  </a>
                </nav>

                {/* Mobile navigation */}
                <nav className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4">
                  <a href="#" className="px-4 py-2 text-orange-500 bg-orange-50 rounded-lg font-medium text-sm whitespace-nowrap">
                    Basic Profile
                  </a>
                  <a href="#" className="px-4 py-2 text-gray-700 bg-gray-50 rounded-lg text-sm whitespace-nowrap">
                    Education
                  </a>
                  <a href="#" className="px-4 py-2 text-gray-700 bg-gray-50 rounded-lg text-sm whitespace-nowrap">
                    Work Experiences
                  </a>
                  <a href="#" className="px-4 py-2 text-gray-700 bg-gray-50 rounded-lg text-sm whitespace-nowrap">
                    Certifications
                  </a>
                  <a href="#" className="px-4 py-2 text-gray-700 bg-gray-50 rounded-lg text-sm whitespace-nowrap">
                    Projects
                  </a>
                  <a href="#" className="px-4 py-2 text-gray-700 bg-gray-50 rounded-lg text-sm whitespace-nowrap">
                    Activities
                  </a>
                </nav>
              </div>

              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        value="Thilak"
                        className="h-12 bg-gray-50 border-gray-200 text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        value="thilak.pandian18@gmail.com"
                        className="h-12 bg-gray-50 border-gray-200 text-gray-400"
                        disabled
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        value="2003-04-18"
                        className="h-12 bg-gray-50 border-gray-200 text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <Select defaultValue="male">
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                      <label className="text-sm text-gray-700 mb-2 block">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          value="+91"
                          className="w-16 sm:w-20 h-12 bg-gray-50 border-gray-200 text-gray-700"
                        />
                        <Input
                          type="tel"
                          value="8667736358"
                          className="flex-1 h-12 bg-gray-50 border-gray-200 text-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm text-gray-600 mb-2 block">
                      About
                    </label>
                    <div className="mb-2">
                      <button className="h-8 w-8 flex bg-gray-200 items-center text-gray-500 hover:bg-gray-200 rounded transition-colors w-full">
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="relative">
                      <Textarea
                        value="A skilled professional with expertise in Decision Science and Computer Science, proficient in software engineering, data analysis, and digital marketing."
                        className="min-h-[120px] px-4 py-3 bg-gray-100 border-0 text-gray-700 text-sm resize-none focus:ring-0 focus:outline-none rounded-lg w-full"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-1">
                      <p className="text-xs text-red-400">Rephrase with AI (limit - 5/5)</p>
                      <p className="text-xs text-gray-400">Character remaining 347</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      This is the first thing people learn about you after your name.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media</h3>
                    <p className="text-xs text-gray-600 mb-4">
                      Please note: You only need to include your <span className="font-semibold">username</span>.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">LinkedIn</label>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                          <div className="flex items-center gap-2 px-3 h-12 bg-gray-100 border border-gray-200 rounded-lg">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            <span className="text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">linkedin.com/</span>
                          </div>
                          <Input
                            type="text"
                            className="flex-1 h-12 bg-white border-gray-200"
                          />
                        </div>
                      </div>
                    </div>

                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">Instagram</label>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                          <div className="flex items-center gap-2 px-3 h-12 bg-gray-100 border border-gray-200 rounded-lg">
                            <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <span className="text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">instagram.com/</span>
                          </div>
                          <Input
                            type="text"
                            className="flex-1 h-12 bg-white border-gray-200"
                          />
                        </div>
                      </div>
                  
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">Personal Website</label>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <div className="flex items-center gap-2 px-3 h-12 bg-gray-100 border border-gray-200 rounded-lg">
                          <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          <span className="text-sm text-gray-700 whitespace-nowrap">https://</span>
                        </div>
                        <Input
                          type="text"
                          className="flex-1 h-12 bg-white border-gray-200"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SupportDialog open={supportOpen} onOpenChange={setSupportOpen} />
    </div>
  );
}