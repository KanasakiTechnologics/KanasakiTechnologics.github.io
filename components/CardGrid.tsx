import Link from "next/link"
import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardGridProps {
    title: string
    descriptionIcons?: ReactNode[]
    children: ReactNode
    className?: string
    href?: string
    openInNewTab?: boolean // ✅ added
}

export function CardGrid({
                             title,
                             descriptionIcons = [],
                             children,
                             className,
                             href,
                             openInNewTab = false,
                         }: CardGridProps) {
    return (
        <Card className={`w-full max-w-sm h-full flex flex-col ${className ?? ""}`}>
            <CardHeader>
                <CardTitle className="font-robotoc text-lg flex items-center gap-2">
                    {title}
                    {openInNewTab && <span className="text-sm">↗</span>}
                </CardTitle>

                <CardDescription>
                    <div className="pt-2 flex items-center gap-3 justify-center">
                        {descriptionIcons.slice(0, 3).map((icon, i) => (
                            <span key={i} className="text-xl">
                {icon}
              </span>
                        ))}
                    </div>
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 font-poppins">
                {children}
            </CardContent>

            <CardFooter className="flex-col gap-2">
                <Button asChild={!!href} variant="outline" className="w-full">
                    {href ? (
                        openInNewTab ? (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click More
                            </a>
                        ) : (
                            <Link href={href}>
                                Click More
                            </Link>
                        )
                    ) : (
                        <>Click More</>
                    )}
                </Button>
            </CardFooter>
        </Card>
    )
}
