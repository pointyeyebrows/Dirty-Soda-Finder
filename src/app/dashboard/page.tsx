import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'
import { 
  ArrowLeft, 
  Palette, 
  Type, 
  Layers, 
  Zap, 
  Code, 
  ExternalLink,
  Star,
  Heart,
  MessageCircle,
  Share,
  Download,
  Settings,
  User,
  Calendar,
  BarChart3,
  TrendingUp
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-bold text-gray-900">shadcn/ui Component Showcase</h1>
            </div>
            <Badge variant="secondary">Complete Ecosystem</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete shadcn/ui Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Explore the comprehensive component library, theme system, and design patterns 
            that power your Dirty Soda Finder application.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Component Library
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://ui.shadcn.com/themes" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Theme System
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://lucide.dev/docs/lucide-react/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Lucide Icons
              </a>
            </Button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Interactive Components */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Interactive Components
              </CardTitle>
              <CardDescription>
                Live demonstrations of form controls and interactive elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-input">Input Field</Label>
                  <Input id="demo-input" placeholder="Type something..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-textarea">Textarea</Label>
                  <Textarea id="demo-textarea" placeholder="Enter your message..." rows={3} />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive" size="sm">Destructive</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>Default Badge</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Color Palette */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Color System
              </CardTitle>
              <CardDescription>
                <a href="https://ui.shadcn.com/colors" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Official Color Palette →
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-primary rounded flex items-center justify-center text-primary-foreground text-sm font-medium">
                  Primary
                </div>
                <div className="h-12 bg-secondary rounded flex items-center justify-center text-secondary-foreground text-sm font-medium">
                  Secondary
                </div>
                <div className="h-12 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm font-medium">
                  Muted
                </div>
                <div className="h-12 bg-accent rounded flex items-center justify-center text-accent-foreground text-sm font-medium">
                  Accent
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                CSS variables defined in globals.css using the @theme directive
              </p>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Typography
              </CardTitle>
              <CardDescription>
                Consistent text hierarchy and styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <h1 className="text-2xl font-bold">Heading 1</h1>
              <h2 className="text-xl font-semibold">Heading 2</h2>
              <h3 className="text-lg font-medium">Heading 3</h3>
              <p className="text-base">Body text with proper line height and spacing for optimal readability.</p>
              <p className="text-sm text-muted-foreground">Small text for captions and metadata</p>
            </CardContent>
          </Card>

          {/* Lucide Icons Demo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Lucide React Icons
              </CardTitle>
              <CardDescription>
                <a href="https://lucide.dev/docs/lucide-react/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Icon Documentation →
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Star className="h-6 w-6" />
                  <span className="text-xs">Star</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-6 w-6" />
                  <span className="text-xs">Heart</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-xs">Message</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Share className="h-6 w-6" />
                  <span className="text-xs">Share</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Download className="h-6 w-6" />
                  <span className="text-xs">Download</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Settings className="h-6 w-6" />
                  <span className="text-xs">Settings</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Import: import {`{ Star, Heart }`} from &apos;lucide-react&apos;
              </p>
            </CardContent>
          </Card>

          {/* Avatar & Profile Components */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Avatar Components
              </CardTitle>
              <CardDescription>
                User profile and avatar display patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">+5 more</span>
              </div>
            </CardContent>
          </Card>

          {/* Hover Cards Demo */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Hover Cards & Interactions
              </CardTitle>
              <CardDescription>
                Interactive hover states and contextual information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline">Hover for User Info</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                          <Calendar className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Joined December 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline">Hover for Stats</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Quick Stats</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <BarChart3 className="h-3 w-3" />
                          <span>1.2k views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>+12% growth</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>4.8 rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>234 users</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>

          {/* Layout Components */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Layout System
              </CardTitle>
              <CardDescription>
                Cards, separators, and layout components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Nested Card</h4>
                <p className="text-sm text-muted-foreground">
                  Cards can be nested and styled with different variants
                </p>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Separator above</span>
                <Badge variant="outline">Layout</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Framework Information */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle>shadcn/ui Ecosystem Integration</CardTitle>
            <CardDescription>
              Complete component library with TypeScript, Tailwind CSS v4, and accessibility features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Component Library
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  70+ production-ready components with consistent design patterns
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">
                    Browse Components
                  </a>
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Theme System
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  CSS-first theming with CSS variables and dark mode support
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://ui.shadcn.com/themes" target="_blank" rel="noopener noreferrer">
                    Explore Themes
                  </a>
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  TypeScript Ready
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Full TypeScript support with proper type definitions and IntelliSense
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://ui.shadcn.com/docs/installation" target="_blank" rel="noopener noreferrer">
                    Installation Guide
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
