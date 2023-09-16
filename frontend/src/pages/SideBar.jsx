import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const DASHBOARD_LIST = [
  {
    id: 1,
    primaryName: "Staff Members",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Add Staff",
        secondaryIcon: <DraftsIcon />,
        path: "/addstaff"
      },
      {
        id: 2,
        secondaryName: "All Staff",
        secondaryIcon: <DraftsIcon />,
        path: "/allstaff"
      },
    ],
  },
  {
    id: 2,
    primaryName: "Suppliers",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Add Supplier",
        secondaryIcon: <DraftsIcon />,
        path: "/addsuppliers"
      },
      {
        id: 2,
        secondaryName: "All Suppliers",
        secondaryIcon: <DraftsIcon />,
        path: "/allsuppliers"
      }
    ],
  },
  {
    id: 3,
    primaryName: "Customers",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "All Customers",
        secondaryIcon: <DraftsIcon />,
        path: "/allcustomers"
      },
    ],
  },
  {
    id: 4,
    primaryName: "Purchases",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Add Purchase",
        secondaryIcon: <DraftsIcon />,
        path: "/addpurchase"
      },
      {
        id: 2,
        secondaryName: "All Purchases",
        secondaryIcon: <DraftsIcon />,
        path: "/allpurchase"
      },
    ],
  },
  {
    id: 5,
    primaryName: "Inventory",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "View Inventory",
        secondaryIcon: <DraftsIcon />,
        path: "/inventory"
      },
    ],
  },
  {
    id: 6,
    primaryName: "Cashier",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Billing",
        secondaryIcon: <DraftsIcon />,
        path: "/billing"
      },
      {
        id: 2,
        secondaryName: "Prescription View",
        secondaryIcon: <DraftsIcon />,
        path: "/prescriptionview"
      },
    ],
  },
  {
    id: 7,
    primaryName: "Receptionist",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Billing",
        secondaryIcon: <DraftsIcon />,
        path: "/receptionist"
      },
      {
        id: 2,
        secondaryName: "Patient Records",
        secondaryIcon: <DraftsIcon />,
        path: "/createpatientrecords"
      },
    ],
  },
  {
    id: 8,
    primaryName: "Doctor",
    primaryIcon: <DraftsIcon />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Prescription",
        secondaryIcon: <DraftsIcon />,
        path: "/prescriptionform"
      },
      {
        id: 2,
        secondaryName: "Patient Records",
        secondaryIcon: <DraftsIcon />,
        path: "/viewpatientrecords"
      },
    ],
  }
];

export default function ResponsiveDrawer(props: Props) {

  const [openItems, setOpenItems] = React.useState([]);

  const handleClick = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((item) => item !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };
  

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
    <Grid item>
    <Grid item align='center'>
        <img
          src="/images/Logo.jpg"
          alt="logo"
          style={{ height: "51px", width: "51px" }}
        />
      </Grid>
      <List
        sx={{
          height: "calc(100vh - 58px)",
          width: "100%",
          Width: 340,
          bgcolor: "#0d47a1"
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {DASHBOARD_LIST.map((item) => (
          <div key={item.id}>
            <ListItemButton onClick={() => handleClick(item.id)}>
              <ListItemIcon>
                {item.primaryIcon}
              </ListItemIcon>
              <ListItemText style={{ color: "white" }} primary={item.primaryName} />
              {openItems.includes(item.id) ? <ExpandLess style={{ color: "white" }} /> : <ExpandMore style={{ color: "white" }} />}
            </ListItemButton>

            <Collapse
              in={openItems.includes(item.id)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.secondaryItems.map((secondaryItem) => (
                  <ListItemButton key={secondaryItem.id} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {secondaryItem.secondaryIcon}
                    </ListItemIcon>
                    <Link to={secondaryItem.path} style={{textDecoration:'none'}}>
                      <ListItemText style={{ color: "white" }} primary={secondaryItem.secondaryName} />
                    </Link>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Grid>

    <NavBar />

  </Grid>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}
