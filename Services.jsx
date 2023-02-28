import { Card, CardActionArea, CardContent, CardMedia, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import MouseIcon from '@mui/icons-material/Mouse';



const drawerWidth = 240;




export default function Services() {
  
    return  (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <Drawer
          variant="permanent"
          sx={{
            
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto'}}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
              alt="green iguana"
            />
            <Divider />
            <List>
              {['Laptops', 'Mouses', 'Keyboards'].map((text, index ) => (
                <ListItem key={text} disablePadding>
  
                  <ListItemButton>
                    <ListItemIcon>
                      
                      {index === 0 ? < LaptopWindowsIcon/> : (
                        index === 1 ? <MouseIcon /> : (
                          index === 2 ? <KeyboardIcon/> : <></>
                        )
                      )}
                      
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
          <Toolbar />
              
  
          <Card sx={ {maxWidth:1600, alignItems:'center', maxHeight:1000}}>
          <CardActionArea>
              <CardContent>
              <Typography variant="h3" gutterBottom >
                Services
              </Typography>
              
              <Typography variant="h5" gutterBottom >
              <Divider textAlign="left">Warranty Assured</Divider>
              </Typography>
              <Typography variant="body1" gutterBottom >
              In case of faulty products, we have an upstanding warranty and claim procedures to make sure that your requirements are met 
              in minimum time loss as possible. Most of our suppliers are based locally,
              so we assure you that we can arrange the best possible warranty claim service, provided that the following conditions are met.
              </Typography>
              <Typography variant="h6" gutterBottom >
                Conditions
              </Typography>
              <Typography variant="body1" gutterBottom >
                <List>
                  <ListItem>
                  Warranty is only applicable to the extent of the supplier’s warranty & terms and conditions.
                  </ListItem>
                  <ListItem>
                  Warranty is only applicable to the extent of the period mentioned against each product in the invoice.
                  </ListItem>
                  <ListItem>
                  During Claims, the packaging with serial numbers must be intact.
                  </ListItem>
                  <ListItem>
                  Warranty is only applicable to manufacturing defects.
                  </ListItem>  
                </List>
              </Typography>
            
              <Typography variant="h5" gutterBottom >
              <Divider textAlign="left">Custom Orders</Divider>
              </Typography>
              <Typography variant="body1" gutterBottom >
              In case your requirements supersedes what the local market has to offer, we will provide you with assistance to meet these requirements.
              We will step up to cross horizons to locate and satisfy these requirements. Provided that the following conditions are met.
              </Typography>
              <Typography variant="h6" gutterBottom >
                Conditions
              </Typography>
              <Typography variant="body1" gutterBottom >
                <List>
                  <ListItem>
                  50% minimum down payment to proceed with a Personalized Orders.
                  </ListItem>
                  <ListItem>
                  Any payment made to receive Personalized Orders is non-refundable.
                  </ListItem> 
                </List>
              </Typography>
              
              <Typography variant="h5" gutterBottom >
              <Divider textAlign="left">Home Delivery</Divider>
              </Typography>
              <Typography variant="body1" gutterBottom >
              To further facilitate your access to your needs, we offer to deliver to meet your requirements straight to where you live within Sri Lankan Borders. We have so far even reached our valued customers in Jaffna.
              We assure you that we are willing to undertake delivery to any part of Sri Lanka provided that the following conditions are met.
              </Typography>
              <Typography variant="h6" gutterBottom >
                Conditions
              </Typography>
              <Typography variant="body1" gutterBottom >
                <List>
                  <ListItem>
                  100% full Payment is required.
                  </ListItem>
                  <ListItem>
                  Payment to be made directly into our bank account for which details will be provided on request.
                  </ListItem> 
                  <ListItem>
                  Delivery is outsourced to a dedicated courier.
                  </ListItem>
                </List>
              </Typography>
  
              </CardContent>
              
            
          </CardActionArea>
        </Card>
        </Box>
      </Box>
    );
  }