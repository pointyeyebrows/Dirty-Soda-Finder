'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, MapPin, Star, Clock, Users, Plus, Search, Filter } from 'lucide-react'

export default function ApplicationPage() {
  const featuredLocations = [
    {
      name: "Soda Pop Shop",
      address: "123 Main St, Salt Lake City, UT",
      rating: 4.8,
      distance: "0.5 miles",
      specialties: ["Classic Dirty Dr Pepper", "Coconut Cream Sprite"]
    },
    {
      name: "Fizzy Dreams",
      address: "456 State St, Provo, UT", 
      rating: 4.6,
      distance: "1.2 miles",
      specialties: ["Vanilla Cherry Coke", "Peach Mango Sprite"]
    },
    {
      name: "Bubble & Brew",
      address: "789 University Ave, Orem, UT",
      rating: 4.9,
      distance: "2.1 miles", 
      specialties: ["Strawberry Cream Pepsi", "Caramel Apple Coke"]
    }
  ]

  const trendingRecipes = [
    {
      name: "Classic Dirty Dr Pepper",
      ingredients: ["Dr Pepper", "Coconut syrup", "Half & half"],
      difficulty: "Easy",
      time: "2 min"
    },
    {
      name: "Tropical Paradise Sprite",
      ingredients: ["Sprite", "Coconut cream", "Pineapple syrup", "Lime"],
      difficulty: "Medium", 
      time: "3 min"
    },
    {
      name: "Caramel Vanilla Dream",
      ingredients: ["Coca-Cola", "Caramel syrup", "Vanilla cream", "Whipped cream"],
      difficulty: "Easy",
      time: "2 min"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
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
              <h1 className="text-xl font-bold text-gray-900">Dirty Soda Finder - Your Starter Kit</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Demo Mode
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Dirty Soda Directory
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is your starter kit showcasing the core features of your dirty soda finder application.
            Explore locations, discover recipes, and see how the community comes together.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Dirty Soda Locations Near You
            </CardTitle>
            <CardDescription>
              Search for dirty soda shops and discover new flavors in your area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input 
                placeholder="Enter your location (e.g., Salt Lake City, UT)" 
                className="flex-1"
              />
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Search Locations
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://koqqkpitepqwlfjymcje.supabase.co/storage/v1/object/public/brand-assets/5ds-blank.svg" />
                        <AvatarFallback>5DS</AvatarFallback>
                      </Avatar>
                      <h4 className="text-sm font-semibold">Location Search Feature</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Make this location search functional with real map integration and business directory APIs.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-xs font-mono">
                      <div className="text-slate-600 dark:text-slate-400 mb-2">Claude Code Prompt (copy & paste):</div>
                      <div className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                        {`Add location search functionality to the Dirty Soda Finder. Create API route at /api/locations using Google Places API or Yelp API. Add GOOGLE_PLACES_API_KEY=your-api-key or YELP_API_KEY=your-api-key to .env.local. Integrate real business search with the existing search component and display results in a map view. Use existing shadcn/ui components and styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      onClick={() => navigator.clipboard.writeText(`Add location search functionality to the Dirty Soda Finder. Create API route at /api/locations using Google Places API or Yelp API. Add GOOGLE_PLACES_API_KEY=your-api-key or YELP_API_KEY=your-api-key to .env.local. Integrate real business search with the existing search component and display results in a map view. Use existing shadcn/ui components and styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`)}
                    >
                      Copy Claude Code Prompt
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>

        {/* Featured Locations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Featured Locations
              </CardTitle>
              <CardDescription>
                Popular dirty soda spots in your area
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {featuredLocations.map((location, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{location.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{location.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                  <p className="text-sm text-purple-600 mb-3">{location.distance} away</p>
                  <div className="flex flex-wrap gap-1">
                    {location.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recipe Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Trending Recipes
              </CardTitle>
              <CardDescription>
                Popular dirty soda recipes from the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingRecipes.map((recipe, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{recipe.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      {recipe.time}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge 
                      variant={recipe.difficulty === 'Easy' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {recipe.difficulty}
                    </Badge>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button size="sm" variant="outline">
                          <Plus className="h-3 w-3 mr-1" />
                          Try Recipe
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-96">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="https://koqqkpitepqwlfjymcje.supabase.co/storage/v1/object/public/brand-assets/5ds-blank.svg" />
                              <AvatarFallback>5DS</AvatarFallback>
                            </Avatar>
                            <h4 className="text-sm font-semibold">Recipe Management Feature</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Create a full recipe management system with user submissions, ratings, and detailed instructions.
                          </p>
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-xs font-mono">
                            <div className="text-slate-600 dark:text-slate-400 mb-2">Claude Code Prompt (copy & paste):</div>
                            <div className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                              {`Add recipe management system to Dirty Soda Finder. Create Supabase tables for recipes, ingredients, and user ratings. Build API routes at /api/recipes for CRUD operations. Add recipe creation form, detailed recipe view, and rating system. Use existing Supabase credentials from .env.local. Integrate with existing UI components and maintain current styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`}
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full" 
                            onClick={() => navigator.clipboard.writeText(`Add recipe management system to Dirty Soda Finder. Create Supabase tables for recipes, ingredients, and user ratings. Build API routes at /api/recipes for CRUD operations. Add recipe creation form, detailed recipe view, and rating system. Use existing Supabase credentials from .env.local. Integrate with existing UI components and maintain current styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`)}
                          >
                            Copy Claude Code Prompt
                          </Button>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
          <CardHeader>
            <CardTitle>Ready to Build More Features?</CardTitle>
            <CardDescription>
              Your Dirty Soda Finder is ready for expansion. Add user authentication, advanced search, 
              community features, and more with the 5 Day Sprint Framework.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Add User Profiles
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://koqqkpitepqwlfjymcje.supabase.co/storage/v1/object/public/brand-assets/5ds-blank.svg" />
                        <AvatarFallback>5DS</AvatarFallback>
                      </Avatar>
                      <h4 className="text-sm font-semibold">User Authentication System</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Add complete user authentication with profiles, favorites, and personalized recommendations.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-xs font-mono">
                      <div className="text-slate-600 dark:text-slate-400 mb-2">Claude Code Prompt (copy & paste):</div>
                      <div className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                        {`Add user authentication to Dirty Soda Finder using Supabase Auth. Create login/signup pages, user profile management, and protected routes. Add user favorites for locations and recipes. Use existing Supabase credentials from .env.local. Integrate with existing shadcn/ui components and styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      onClick={() => navigator.clipboard.writeText(`Add user authentication to Dirty Soda Finder using Supabase Auth. Create login/signup pages, user profile management, and protected routes. Add user favorites for locations and recipes. Use existing Supabase credentials from .env.local. Integrate with existing shadcn/ui components and styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`)}
                    >
                      Copy Claude Code Prompt
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Advanced Filters
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://koqqkpitepqwlfjymcje.supabase.co/storage/v1/object/public/brand-assets/5ds-blank.svg" />
                        <AvatarFallback>5DS</AvatarFallback>
                      </Avatar>
                      <h4 className="text-sm font-semibold">Advanced Search & Filtering</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Add sophisticated filtering by ingredients, dietary restrictions, location radius, and ratings.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-xs font-mono">
                      <div className="text-slate-600 dark:text-slate-400 mb-2">Claude Code Prompt (copy & paste):</div>
                      <div className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                        {`Add advanced search and filtering to Dirty Soda Finder. Create filter components for ingredients, dietary restrictions, distance radius, price range, and ratings. Add search API endpoints with complex query support. Integrate with existing location and recipe data. Use existing shadcn/ui components and styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      onClick={() => navigator.clipboard.writeText(`Add advanced search and filtering to Dirty Soda Finder. Create filter components for ingredients, dietary restrictions, distance radius, price range, and ratings. Add search API endpoints with complex query support. Integrate with existing location and recipe data. Use existing shadcn/ui components and styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`)}
                    >
                      Copy Claude Code Prompt
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <Link href="/dashboard">
                <Button variant="outline">
                  View Component Library
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
