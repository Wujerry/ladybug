import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'

export default function Roll() {
  return (
    <Card className='my-8 w-[800px]'>
      <CardHeader>
        <CardTitle className='flex'>
          <Badge>
            <span className='text-xl'>1.0 ETH</span>
          </Badge>
        </CardTitle>
        {/* <CardDescription>Loser pays the bill</CardDescription> */}
      </CardHeader>
      <CardContent>123123123</CardContent>
      <Separator className='my-4' />
      <CardContent>
        <Progress value={33} />
        33%
      </CardContent>
      <CardFooter className='flex justify-evenly'></CardFooter>
    </Card>
  )
}
