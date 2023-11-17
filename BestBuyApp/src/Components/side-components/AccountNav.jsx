import {Text,Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"

function AccountNav(){
    return(
        <>
        <Box h="4.3em" bg="#0046be" display="flex" justifyContent={'space-evenly'} alignItems="center">
            <Box h="4em" w="6em"  >
               <img src="https://corporate.bestbuy.com/wp-content/uploads/2021/02/BestBuyLogoReversedRGB.svg" alt="" />
            </Box>
            <Box w="15%"></Box>

            <Link to="/">
            <Box border="0px solid red" h="2em" display="flex" alignItems="center">
                <Text fontWeight="500" fontSize="xs" color='white'
                >  Return to previous page
                </Text>
            </Box>

            </Link>
        </Box>

        </>
    )
}

export default AccountNav;