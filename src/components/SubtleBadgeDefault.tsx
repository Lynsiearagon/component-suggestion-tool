import { VisaHistoryTiny } from "@visa/nova-icons-react";
import { Badge } from "@visa/nova-react";

export const SubtleBadgeDefault = () => {
  return (
    <Badge badgeType="subtle">
      <VisaHistoryTiny aria-label="history" /> Label
    </Badge>
  );
};
