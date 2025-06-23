//shadcn components
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader } from "@/components/ui/card";

export const MemberLoginLoading = () => {
  return (
    <div className="container mx-auto flex h-full items-center justify-center p-4 sm:p-6">
      <Card className="w-[400px] p-4 shadow-2xl">
        <CardHeader className="px-0">
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-[70px] w-8/12 max-w-[300px]" />
            <Skeleton className="h-[35px] w-2/12" />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
