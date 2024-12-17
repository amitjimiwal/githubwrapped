"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { year: "2021", desktop: 186 },
  { year: "2022", desktop: 305 },
  { year: "2023", desktop: 237 },
  { year: "2024", desktop: 73 },
];

const chartConfig = {
  desktop: {
    label: "Commmits",
    color: "#BF40BF",
  },
} satisfies ChartConfig;

export function GrowthChart() {
  return (
    <Card className="w-full h-full bg-inherit border-none">
      <CardHeader>
        <CardDescription className="text-lg font-semibold text-white mb-4 opacity-85">
          Showing total commits per year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <YAxis
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value}
              color="#000000"
              dataKey={"desktop"}
            />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value}
              color="#000000"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
