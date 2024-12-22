"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Commits",
    color: "#BF40BF",
  },
} satisfies ChartConfig;

export function GrowthChart({
  data,
}: {
  data: { year: number; contributions: number }[];
}) {
  const refineData = data
    .map((d) => ({
      year: d.year.toString(),
      contributions: d.contributions,
    }))
    .reverse();
  return (
    <Card className="w-full h-full bg-inherit border-none">
      <CardHeader></CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={refineData}
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
              dataKey={"contributions"}
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
              dataKey="contributions"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
