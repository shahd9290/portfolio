"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ModernPortfolio from "@/components/modern-portfolio"
import DeveloperPortfolio from "@/components/developer-portfolio"
import CreativePortfolio from "@/components/creative-portfolio"
import MinimalPortfolio from "@/components/minimal-portfolio"
import InteractivePortfolio from "@/components/interactive-portfolio"

const portfolios = [
  { id: "modern", name: "Modern Developer", component: ModernPortfolio },
  { id: "developer", name: "Terminal Style", component: DeveloperPortfolio },
  { id: "creative", name: "Creative Tech", component: CreativePortfolio },
  { id: "minimal", name: "Clean Minimal", component: MinimalPortfolio },
  { id: "interactive", name: "Interactive Dynamic", component: InteractivePortfolio },
]

export default function PortfolioShowcase() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("modern")

  const SelectedComponent = portfolios.find((p) => p.id === selectedPortfolio)?.component || ModernPortfolio

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portfolio Selector */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {portfolios.map((portfolio) => (
              <Button
                key={portfolio.id}
                variant={selectedPortfolio === portfolio.id ? "default" : "outline"}
                onClick={() => setSelectedPortfolio(portfolio.id)}
                className="text-sm"
              >
                {portfolio.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Display */}
      <div className="container mx-auto">
        <SelectedComponent />
      </div>
    </div>
  )
}
