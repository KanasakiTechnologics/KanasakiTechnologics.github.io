import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
    title: string
    descriptionIcons?: React.ReactNode[]
    children: React.ReactNode
    className?: string
}
export function CardGrid({title,descriptionIcons = [],children,className,}: CardProps) {
  return (
      <Card className={`w-full max-w-sm ${className ?? ""}`}>
      <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
              <div className="flex items-center gap-3">
                  {descriptionIcons.slice(0, 3).map((icon, i) => (
                      <span key={i} className="text-xl">{icon}</span>
                  ))}
              </div>
          </CardDescription>
      </CardHeader>
      <CardContent>
          {children}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full">
          Click More
        </Button>
      </CardFooter>
    </Card>
  )
}
