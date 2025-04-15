
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const CampaignCalculator = () => {
  const [socialPlatform, setSocialPlatform] = useState<string>("");
  const [totalReach, setTotalReach] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [campaignDate, setCampaignDate] = useState<Date>();
  const [deliverables, setDeliverables] = useState("");

  const handleCalculate = () => {
    // Placeholder for calculation logic
    console.log("Calculating...");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow">
      <p className="text-lg text-center mb-8">
        Our free calculator is designed to help you work out how much you should be spending on paid social, to hit a certain goal.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Social Platform:</label>
          <Select onValueChange={setSocialPlatform} value={socialPlatform}>
            <SelectTrigger>
              <SelectValue placeholder="Select platform" />
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
          <label className="text-sm font-medium">Total Reach (Users):</label>
          <Input 
            type="number" 
            placeholder="Enter reach"
            value={totalReach}
            onChange={(e) => setTotalReach(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Follower Count:</label>
          <Input 
            type="number" 
            placeholder="Enter follower count"
            value={followerCount}
            onChange={(e) => setFollowerCount(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Campaign Length:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !campaignDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {campaignDate ? format(campaignDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={campaignDate}
                onSelect={setCampaignDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Number of Deliverables:</label>
          <Input 
            type="number" 
            placeholder="Enter number of deliverables"
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
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
