
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { DateRange } from "react-day-picker";

const CampaignCalculator = () => {
  const [socialPlatform, setSocialPlatform] = useState<string>("");
  const [totalReach, setTotalReach] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [deliverables, setDeliverables] = useState("");

  const handleCalculate = () => {
    // Placeholder for calculation logic
    console.log("Calculating...");
  };

  // Helper function to format the platform name
  const formatPlatformName = (platform: string) => {
    if (!platform) return "";
    return platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow">
      <p className="text-lg text-center font-bold mb-8 text-black text-2xl">
        Our free calculator is designed to help you work out how much you should be spending on paid social, to hit a certain goal.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="platform" className="text-sm font-medium">Social Platform:</Label>
          <p className="text-xs text-gray-500 mb-1 text-left font-bold">Social Platform</p>
          <Select onValueChange={setSocialPlatform} value={socialPlatform}>
            <SelectTrigger id="platform">
              <SelectValue placeholder="Select Platform" className="text-black font-medium">
                {socialPlatform ? formatPlatformName(socialPlatform) : "Select Platform"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reach" className="text-sm font-medium">Total Reach (Users):</Label>
          <p className="text-xs text-gray-500 mb-1 text-left font-bold">Targeted Reach</p>
          <Input 
            id="reach"
            type="number" 
            placeholder="Enter expected number of users to reach"
            value={totalReach}
            onChange={(e) => setTotalReach(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="followers" className="text-sm font-medium">Follower Count:</Label>
          <p className="text-xs text-gray-500 mb-1 text-left font-bold">Follower Count</p>
          <Input 
            id="followers"
            type="number" 
            placeholder="Enter total number of followers"
            value={followerCount}
            onChange={(e) => setFollowerCount(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Campaign Length:</Label>
          <p className="text-xs text-gray-500 mb-1 text-left font-bold">Campaign Length</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal text-black",
                  !date?.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <span className="font-medium">
                      {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                    </span>
                  ) : (
                    <span className="font-medium">{format(date.from, "LLL dd, y")}</span>
                  )
                ) : (
                  <span>Select campaign start and end dates</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deliverables" className="text-sm font-medium">Number of Deliverables:</Label>
          <p className="text-xs text-gray-500 mb-1 text-left font-bold">Number of Deliverables</p>
          <Input 
            id="deliverables"
            type="number" 
            placeholder="Enter total number of campaign assets"
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button 
            onClick={handleCalculate}
            className="flex-1 bg-green-500 hover:bg-green-600"
          >
            Calculate Price
          </Button>
          <Button 
            variant="destructive"
            className="flex-1"
          >
            GO PRO FOR MORE INSIGHTS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCalculator;
