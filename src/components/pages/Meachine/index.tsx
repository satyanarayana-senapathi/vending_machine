import {
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, DragEvent, useEffect } from "react";
import Typo from "../../atoms/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Images from "../../atoms/Image";
import Buttons from "../../atoms/Button";

interface Drag {
  id?: string;
  src?: string;
  alt?: string;
  name?: string;
}
interface PriceObject {
  [itemId: string]: number;
}

interface CountDuplicate {
  count: number;
  id: string[];
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface Props{
  stateChange:(arg0:string)=> void;
}

const Machine = ({stateChange}:Props) => {
  const [total, setTotal] = useState(0);
  const [images, setImages] = useState<Drag[]>([]);
  const [dragged, setDragged] = useState<any>([]);
  const [deleteItem, setDeleteItem] = useState<any>([]);
  const [flag, setFlag] = useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  useEffect(()=>{
    stateChange("logOut");
  },[])
  const handleClose = () => {
    setOpen(false);
    setImages([]);
    setTotal(0);
  };
  const price: PriceObject = {
    "1": 20,
    "2": 30,
    "3": 50,
    "4": 120,
    "5": 100,
    "6": 50,
    "7": 150,
    "8": 10,
    "9": 100,
    "10": 40,
    "11": 10,
    "12": 20,
    "13": 15,
    "14": 50,
    "15": 200,
    "16": 10,
    "17": 30,
    "18": 20,
    "19": 20,
    "20": 50,
  };

  const countDuplicates: { [name: string]: CountDuplicate } = images.reduce(
    (countMap: any, currentItem: any) => {
      const { id, name } = currentItem;
      if (!countMap[name]) {
        countMap[name] = { count: 1, id: [id] };
      } else {
        countMap[name].count++;
        countMap[name].id.push(id);
      }

      return countMap;
    },
    {}
  );

  //   console.log(countDuplicates.name);

  const handleDragStart = (e: any) => {
    setDragged({
      id: e.target.id,
      src: e.target.src,
      alt: `${flag + 1}`,
      name: e.target.alt,
    });
    setFlag((prev) => prev + 1);
  };
  const handleDelete = (e: any) => {
    setDeleteItem({ id: e.target.id, src: e.target.src, alt: e.target.alt });
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setImages((prv) => {
      return [...prv, dragged];
    });
    setTotal((cur) => {
      return cur + price[dragged.id];
    });
  };
  const handleDropDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setImages((prevList) =>
      prevList.filter((item) => {
        if (item.alt === deleteItem.alt) {
          setTotal((cur) => {
            return cur - price[deleteItem.id];
          });
          return false;
        } else {
          return true;
        }
      })
    );
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragOverDelete = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const imgElement = e.currentTarget.firstElementChild as HTMLImageElement;
    // console.log("imgElement",imgElement)
    setImages((prv) => {
      return [
        ...prv,
        {
          id: imgElement?.id,
          src: imgElement?.src,
          alt: `${flag + 1}`,
          name: imgElement?.alt,
        },
      ];
    });
    setTotal((cur) => {
      return cur + price[imgElement?.id];
    });
    setFlag((prev) => prev + 1);
  };
  return (
    <>
    
      <Stack
        spacing={6}
        direction={"row"}
        sx={{ backgroundColor: "#458867", padding: "20px" }}
      >
        <Stack id="items-list" spacing={3}>
          <Stack
            direction={"row"}
            alignItems={"baseline"}
            spacing={5}
            justifyContent={"space-evenly"}
          >
            <Badge badgeContent={`₹ 20`} color="error">
              {" "}
              <IconButton onClick={addItem}>
                <Tooltip title={"chips"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="1"
                    src={"items/food/chips.svg"}
                    alt={"chips"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 30`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"cup cake"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="2"
                    src={"items/food/Muffin.svg"}
                    alt={"cup cake"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 50`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"hot dog"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="3"
                    src={"items/food/muffles.svg"}
                    alt={"hot dog"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 120`} color="error">
              {" "}
              <IconButton onClick={addItem}>
                <Tooltip title={"nachos"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="4"
                    src={"items/food/nachos.svg"}
                    alt={"nachos"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 100`} color="error">
              {" "}
              <IconButton onClick={addItem}>
                <Tooltip title={"dounut"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="5"
                    src={"items/food/nut.svg"}
                    alt={"dounut"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
          </Stack>
          <hr id="item-seperator" />
          <Stack
            direction={"row"}
            alignItems={"baseline"}
            spacing={5}
            justifyContent={"space-evenly"}
          >
            <Badge badgeContent={`₹ 50`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"popsickle"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="6"
                    src={"items/ice/Sweet2.svg"}
                    alt={"popsickle"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 150`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"burger"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="7"
                    src={"items/food/sandwidch.svg"}
                    alt={"burger"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 10`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"choclate"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="8"
                    src={"items/ice/asha.svg"}
                    alt={"choclate"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 100`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"spiral"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="9"
                    src={"items/ice/choclate2.svg"}
                    alt={"spiral"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 40`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"ice cream"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="10"
                    src={"items/ice/cone.svg"}
                    alt={"ice cream"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
          </Stack>
          <hr id="item-seperator" />
          <Stack
            direction={"row"}
            alignItems={"baseline"}
            spacing={5}
            justifyContent={"space-evenly"}
          >
            <Badge badgeContent={`₹ 10`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"water bottle"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="11"
                    src={"items/drink/bottle-2.svg"}
                    alt={"water bottle"}
                    className="imageitems"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 20`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"water bottle"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="12"
                    src={"items/drink/bottle.svg"}
                    alt={"water bottle"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 15`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"drink"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="13"
                    src={"items/drink/coke-1.svg"}
                    alt={"drink"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 50`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"tin can"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="14"
                    src={"items/drink/coke-2.svg"}
                    alt={"tin can"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 200`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"can beer"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="15"
                    src={"items/drink/coke-3.svg"}
                    alt={"can beer"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
          </Stack>
          <hr id="item-seperator" />
          <Stack direction={"row"} alignItems={"baseline"} spacing={5}>
            <Badge badgeContent={`₹ 10`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"drink"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="16"
                    src={"items/drink/cola.svg"}
                    alt={"drink"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 30`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"lemonade"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="17"
                    src={"items/drink/drink.svg"}
                    alt={"lemonade"}
                    className="imageitems"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 20`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"soda"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="18"
                    src={"items/drink/soda-can.svg"}
                    alt={"soda"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 20`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"fruit juice"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="19"
                    src={"items/drink/juice.svg"}
                    alt={"drink"}
                    className="imageitems"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
            <Badge badgeContent={`₹ 50`} color="error">
              <IconButton onClick={addItem}>
                <Tooltip title={"diet coke"}>
                  <img
                    onDragStart={handleDragStart}
                    draggable="true"
                    id="20"
                    src={"items/drink/sodacan.svg"}
                    alt={"diet coke"}
                    className="imageitem"
                  />
                </Tooltip>
              </IconButton>
            </Badge>
          </Stack>
        </Stack>

        <Stack direction={"row"} spacing={10}>
          <Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typo
                variant={"body1"}
                content={" Drag Your Items Here"}
                color={"#f6f3f5"}
                alignItems={"center"}
              />
            </Stack>
            <div
              draggable="true"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragStart={handleDelete}
              style={{
                width: "max-content",
                minWidth: "250px",
                maxWidth: "300px",
                minHeight: "250px",

                border: "4px dashed #ccc",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                gap: "10px",
                padding: "10px",
              }}
            >
              {images.map((image: any, index: any) => (
                <img
                  draggable="true"
                  key={index}
                  src={image.src}
                  id={image.id}
                  alt={`${image.alt}`}
                  style={{ maxWidth: "80%", maxHeight: "50px" }}
                />
              ))}
            </div>
            <Stack
              onDrop={handleDropDelete}
              onDragOver={handleDragOverDelete}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Tooltip title={"Drag here to delete item"}>
                <DeleteIcon sx={{ width: "200px", height: "200px" }} />
              </Tooltip>
            </Stack>
          </Stack>

          <Paper sx={{ minWidth: "22rem" }}>
            <Stack padding={5}>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typo variant={"h4"} content={"Bill"} color={"red"} />
              </Stack>
              <Typo variant={"body1"} content={"Items List"} color={"Black"} />
              <>
                {Object.entries(countDuplicates).map(
                  ([name, { count, id }]: [string, CountDuplicate]) => (
                    <div key={name}>
                      <Typo
                        variant="subtitle1"
                        content={`${name} --------------- ${count}  X   ${
                          price[id[0]]
                        } = ${count * price[id[0]]}`}
                      />
                    </div>
                  )
                )}
              </>
              <Stack alignItems={"center"} spacing={5}>
                ----------------------------------------
                <Typo
                  variant={"body1"}
                  content={`Total Amount = ${total} `}
                  sx={{ alignItems: "flex-end" }}
                />
                ----------------------------------------
                <Buttons
                  content={"Buy Now"}
                  variant={"contained"}
                  onClick={handleOpen}
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typo
                      id="modal-modal-title"
                      variant="h5"
                      content={" Bill"}
                    />
                    <Typo
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      variant={"h6"}
                      content={`Total Amount: ${total}`}
                    />
                    <Buttons
                      onClick={handleClose}
                      content={"Close"}
                      variant={"contained"}
                    ></Buttons>
                  </Box>
                </Modal>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </>
  );
};

export default Machine;
