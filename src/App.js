import {
  Box,
  Image,
  Card,
  Heading,
  Text,
  Badge,
  Grid,
  GridItem,
  Button,
  Spacer,
} from "@chakra-ui/react";
import back from "./Assests/bg-cafe.jpg";
import bg from "./Assests/vector.svg";
import data from "./Data.json";
import star from "./Assests/Star_fill.svg";
// import stfill from "./Assests/stfill.svg";

function App() {
  return (
    <>
      <Box
        bg={"#111315"}
        // border={"1px solid red"}
        w={"auto"}
        minH={"150vh"}
        overflow={"hidden"}
      >
        <Box w={"100%"} h={"100%"}>
          <Image src={back} alt="no connection" w={"100%"} h={"30%"} />
        </Box>
        <center>
          <Box
            bg={"#111315"}
            w={"100%"}

            //border={"1px solid green"}
          >
            <Card
              maxW="80%"
              bg={"#1B1D1F"}
              h={"fit-content"}
              padding={"5% 2%"}
              // border={"1px solid pink"}
              position={"absolute"}
              top={"17%"}
              left={"10%"}
              alignItems={"center"}
            >
              <Box position={"absolute"} top={"4%"} left={"50%"}>
                <Image src={bg} />
              </Box>
              <Box
                //flex="1"
                // gap="4"
                w={"40%"}
                //border={"1px solid red"}
                //alignContent={"center"}

                position={"relative"}
              >
                <Heading color={"#FEF7EE"} fontWeight={"600"} fontSize={"2rem"}>
                  Our Collection
                </Heading>
              </Box>

              <Box
                position={"relative"}
                //border={"1px solid yellow"}
                w={"40%"}
              >
                <Text color={"#6F757C"} fontSize={"1rem"} fontWeight={"600"}>
                  Introducing our Coffee Collection, a selection of unique
                  coffees from different roast types and origins, expertly
                  roasted in small batches and shipped fresh weekly.
                </Text>
              </Box>
              <Box padding={"2%"}>
                <Button bg={"#6F757C"} color={"white"} _hover={"none"}>
                  All Products
                </Button>
                <Button bg={"#1B1D1F"} color={"white"} _hover={"none"}>
                  Available Now
                </Button>
              </Box>
              <Grid templateColumns="repeat(3, 3fr)" gap={10}>
                {data.map((data) => {
                  return (
                    <GridItem key={data.id} padding={2}>
                      <Image
                        src={data.image}
                        borderRadius={"15px"}
                        padding={2}
                      />
                      <Spacer />
                      <Box
                        //border={"1px solid red"}

                        padding={2}
                      >
                        <Text
                          color={"#FEF7EE"}
                          //border={"2px solid blue"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          fontSize={"0.875rem"}
                          fontWeight={"bold"}
                        >
                          {data.name}
                          <Badge
                            padding={1}
                            bg={"#BEE3CC"}
                            borderRadius={"5px"}
                          >
                            {data.price}
                          </Badge>
                        </Text>
                        <Text
                          color={"#FEF7EE"}
                          display={"flex"}
                          alignContent={"stretch"}
                          justifyContent={"start"}
                          fontWeight={"bold"}
                          //border={"1px solid green"}

                          gap={2}
                        >
                          {data.rating}
                          {"  "}
                          <Text
                            display={"flex"}
                            color="#6F757C"
                            fontWeight={"400"}
                            //border={"2px solid red"}
                          >
                            {data.votes}
                          </Text>
                        </Text>
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </Card>
          </Box>
        </center>
      </Box>
    </>
  );
}

export default App;
