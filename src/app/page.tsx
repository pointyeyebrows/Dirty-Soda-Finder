import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, BookOpen, Users, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Dirty Soda Finder</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              5 Day Sprint Framework Installed
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Discover the World of{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dirty Sodas
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find amazing dirty soda locations near you, explore creative recipes, and join a community 
            of soda enthusiasts discovering unique flavor combinations.
          </p>
          
          {/* Primary Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/application">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                View Starter Kit
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="px-8 py-3">
                View Component Showcase
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="lg" className="px-8 py-3">
                View Login Examples
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Find Locations</CardTitle>
              <CardDescription>
                Discover dirty soda shops and locations near you with our interactive map and location finder.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-pink-600 mb-4" />
              <CardTitle>Recipe Collection</CardTitle>
              <CardDescription>
                Browse hundreds of dirty soda recipes and create your own unique flavor combinations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Connect with other dirty soda enthusiasts and share your favorite recipes and discoveries.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Development Workflow */}
        <Card className="bg-white/60 backdrop-blur-sm border-gray-200">
          <CardHeader>
            <CardTitle className="text-center">5 Day Sprint Framework Workflow</CardTitle>
            <CardDescription className="text-center">
              From project discussion to deployment - systematic development approach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Project Setup</h4>
                <p className="text-sm text-gray-600">Environment configuration and framework installation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pink-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Feature Planning</h4>
                <p className="text-sm text-gray-600">Systematic feature specification and task organization</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-sm text-gray-600">Claude Code implementation with localhost testing</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Deployment</h4>
                <p className="text-sm text-gray-600">Vercel deployment with production verification</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>Built with the 5 Day Sprint Framework • Next.js • TypeScript • Tailwind CSS • shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
