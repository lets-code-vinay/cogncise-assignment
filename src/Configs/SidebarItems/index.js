import {
  PieChart as PieChartIcon,
  LocalActivity as LocalActivityIcon,
  Group as GroupIcon,
  EmojiObjects as EmojiObjectsIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  BeachAccess as BeachAccessIcon,
} from "@material-ui/icons";

export const listItems = [
  {
    listIcon: <PieChartIcon />,
    listText: "Overview",
  },
  {
    listIcon: <LocalActivityIcon />,
    listText: "Tickets",
  },
  {
    listIcon: <EmojiObjectsIcon />,
    listText: "Ideas",
  },
  {
    listIcon: <GroupIcon />,
    listText: "Contacts",
  },

  {
    listIcon: <RecordVoiceOverIcon />,
    listText: "Agents",
  },
  {
    listIcon: <DescriptionIcon />,
    listText: "Articles",
  },

  {
    listIcon: <SettingsIcon />,
    listText: "Setting",
  },
  {
    listIcon: <BeachAccessIcon />,
    listText: "Subscription",
  },
];
