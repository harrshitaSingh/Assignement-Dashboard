// import React, { useState, useRef, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Grid from "@mui/material/Grid";
// import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
// import "./DescriptionTab.css";
// import { Button } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";

// const DescriptionTab = (props) => {
//   const [activeSubTab, setActiveSubTab] = useState("drawing");
//   const [showForm, setShowForm] = useState(false);
//   const [unit, setUnit] = useState("");
//   const [formState, setFormState] = useState({
//     description: "",
//     quantity: 0,
//     unit: "",
//     rate: 0,
//   });

//   const [isFormFilled, setIsFormFilled] = useState(false);

//   const fileInputRef = useRef(null);

//   const handleSubTabClick = (subTab) => {
//     setActiveSubTab(subTab);
//     if (subTab === "components") {
//       setShowForm(true);
//     } else {
//       setShowForm(false);
//     }
//   };

//   useEffect(() => {
//     console.log(formState, " form State ");
//   }, [formState]);

//   const handleChange = (e) => {
//     setFormState((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleUploadButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileInputChange = (event) => {
//     const selectedFile = event.target.files[0];
//     console.log("Selected File:", selectedFile);
//   };

//   const multiplyQuantity = () => {
//     const total = formState.quantity * formState.rate;
//     return total.toFixed(2);
//   };

//   return (
//     <div className="description-tab-container">
//       <div className="tabs">
//         <button
//           className={activeSubTab === "drawing" ? "active" : ""}
//           onClick={() => handleSubTabClick("drawing")}
//         >
//           Drawing
//         </button>

//         <DriveFolderUploadIcon
//           onClick={handleUploadButtonClick}
//           style={{
//             color: "white",
//             backgroundColor: "yellow",
//             marginLeft: "-27vw",
//           }}
//         />

//         <button
//           className={activeSubTab === "components" ? "active" : ""}
//           onClick={() => handleSubTabClick("components")}
//         >
//           Components
//         </button>
//       </div>

//       {showForm && (
//         <div className={`form-container ${isFormFilled ? "yellow-bg" : ""}`}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 type="text"
//                 label="Description"
//                 variant="standard"
//                 fullWidth
//                 name="description"
//                 onChange={(e) => handleChange(e)}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 label="Quantity"
//                 variant="standard"
//                 name="quantity"
//                 type="number"
//                 inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
//                 onChange={(e) => handleChange(e)}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <Select
//                 type="text"
//                 label="Unit"
//                 variant="standard"
//                 name="unit"
//                 value={formState.unit}
//                 onChange={(e) => handleChange(e)}
//                 fullWidth
//               >
//                 <MenuItem value="squareFoot">Square Foot</MenuItem>
//                 <MenuItem value="meter">Meter</MenuItem>
//               </Select>
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 label="Rate"
//                 name="rate"
//                 variant="standard"
//                 type="number"
//                 inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
//                 onChange={(e) => handleChange(e)}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <div
//                 style={{ fontWeight: "bold", color: "black", marginTop: "1vw" }}
//               >
//                 INR: {multiplyQuantity()}
//               </div>
//             </Grid>
//           </Grid>
//           <Button
//             variant="outlined"
//             endIcon={<SendIcon />}
//             onClick={() => props.submitDescription(formState)}
//             style={{ marginRight: "-22vw" }}
//           >
//             Add Vendors
//           </Button>{" "}
//         </div>
//       )}

//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: "none" }}
//         onChange={() => handleFileInputChange}
//       />
//     </div>
//   );
// };

// export default DescriptionTab;

import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./DescriptionTab.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const DescriptionTab = (props) => {
  const [activeSubTab, setActiveSubTab] = useState("drawing");
  const [showForm, setShowForm] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
    if (subTab === "components") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const multiplyQuantity = () => {
    const total =
      props.masterData[props.index].component.quantity *
      props.masterData[props.index].component.rate;
    return total.toFixed(2);
  };

  // const handleFileInputChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   console.log("Selected File:", selectedFile);
  // };

  return (
    <div className="description-tab-container">
      <div className="tabs">
        <button
          className={activeSubTab === "drawing" ? "active" : ""}
          onClick={() => handleSubTabClick("drawing")}
        >
          Drawing
        </button>

        <DriveFolderUploadIcon
          onClick={handleUploadButtonClick}
          style={{
            color: "white",
            backgroundColor: "yellow",
            marginLeft: "-27vw",
          }}
        />

        <button
          className={activeSubTab === "components" ? "active" : ""}
          onClick={() => handleSubTabClick("components")}
        >
          Components
        </button>
      </div>

      {showForm && (
        <div className={`form-container ${isFormFilled ? "yellow-bg" : ""}`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Description"
                variant="standard"
                fullWidth
                name="description"
                value={props.masterData[props.index].component.description}
                onChange={props.handleChange(props.index)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Quantity"
                variant="standard"
                name="quantity"
                type="number"
                value={props.masterData[props.index].component.quantity}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={props.handleChange(props.index)}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                type="text"
                label="Unit"
                variant="standard"
                name="unit"
                value={props.masterData[props.index].component.unit}
                onChange={props.handleChange(props.index)}
                fullWidth
              >
                <MenuItem value="squareFoot">Square Foot</MenuItem>
                <MenuItem value="meter">Meter</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Rate"
                name="rate"
                variant="standard"
                type="number"
                value={props.masterData[props.index].component.rate}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={props.handleChange(props.index)}
              />
              <Grid item xs={4}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "1vw",
                    marginLeft: "-41vw",
                  }}
                >
                  INR: {multiplyQuantity()}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                endIcon={<SendIcon />}
                onClick={() => props.submitDescription("value")}
                style={{ marginRight: "-22vw" }}
              >
                Add Vendors
              </Button>{" "}
            </Grid>
          </Grid>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        // onChange={() => handleFileInputChange}
      />
    </div>
  );
};

export default DescriptionTab;
