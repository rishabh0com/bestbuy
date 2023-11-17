import {Box,Text} from "@chakra-ui/react"

function AccFooter(){
    return (
    <div >
              {/* footer */}
      <Box h="7.5em" bg="white" marginTop="4em" display="flex" alignItems="center">
        <hr />
        <Box p="1em" border="0px solid black" fontSize="xs" width="70%" m="auto" h="80%">
          <Box display="flex" >
           <Text color="#0046be" fontWeight="light"   >Terms and Conditions </Text>
            <Box marginLeft="6px" marginRight="6px" color="grey"> |</Box>
           <Text color="#0046be" fontWeight="light" >Privacy</Text>
            <Box  marginLeft="6px" marginRight="6px" color="grey">|</Box>
           <Text color="#0046be" fontWeight="light" >Interest-Based Ads</Text>
          </Box>

          <Text color="#0046be" fontWeight="light" marginTop=".5em" marginBottom=".5em">Mobile Site</Text>
          <Text fontWeight="light">
           Prices and offers are subject to change. © 2023 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the Tag Design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies. 
          </Text>
        </Box>
      </Box>
      <hr />
        </div>
    )
}

export default AccFooter;