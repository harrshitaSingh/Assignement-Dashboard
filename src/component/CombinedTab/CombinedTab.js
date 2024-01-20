import React, { useEffect, useState } from "react";
import ItemTab from "../ItemTab/ItemTab";
import DescriptionTab from "../DescriptionTab/DescriptionTab";
import MaterialTab from "../MaterialTab/MaterialTab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./CombinedTab.css";
import { FormState } from "../../formState";

const CombinedTab = () => {
  const [activeTab, setActiveTab] = useState("item");
  const [masterData, setMasterData] = useState([]);
  const [descIndex, setDescIndex] = useState();

  useEffect(() => {
    console.log(masterData, " Master data ");
  }, [masterData]);

  const onAdding = () => {
    const state = FormState;
    setMasterData((prev) => {
      return [...prev, state];
    });
    console.log(masterData, " master data ");
  };

  function ChangeHeading(index) {
    return function changeHeading(e) {
      setMasterData((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = {
          ...updatedState[index],
          [e.target.name]: e.target.value,
        };
        return updatedState;
      });
      console.log(index, " ", e.target.value, " ", e.target.name);
    };
  }

  const changeDescription = (value) => {
    console.log(value, " index ");

    return (e) => {
      setMasterData((prev) => {
        const updatedState = [...prev];
        updatedState[value] = {
          ...updatedState[value],
          component: {
            ...updatedState[value].component,
            [e.target.name]: e.target.value,
          },
        };
        return updatedState;
      });
      console.log(masterData, " data ");
    };
  };

  const changeWorkOrMaterial = (value, type) => {
    if (type === "work") {
      return (e) => {
        setMasterData((prev) => {
          const updatedState = [...prev];
          updatedState[value] = {
            ...updatedState[value],
            component: {
              ...updatedState[value].component,
            },
            work: {
              ...updatedState[value].work,
              [e.target.name]: e.target.value,
            },
          };
          return updatedState;
        });
        console.log(masterData, " data ");
      };
    } else {
      return (e) => {
        setMasterData((prev) => {
          const updatedState = [...prev];
          updatedState[value] = {
            ...updatedState[value],
            component: {
              ...updatedState[value].component,
            },
            material: {
              ...updatedState[value].material,
              [e.target.name]: e.target.value,
            },
          };
          return updatedState;
        });
        console.log(masterData, " data ");
      };
    }
    console.log(value, " value is changing ");
    console.log(value, " index ");
  };

  const submitHeading = (value) => {
    setDescIndex(value);
    setActiveTab("description");
  };

  const SubmitComponent = (value) => {
    setActiveTab("material");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Tabs
        value={activeTab}
        onChange={(event, newValue) => handleTabClick(newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered={false}
        variant="fullWidth"
        className="tabs"
      >
        <Tab label="Item" value="item" />
        <Tab label="Description" value="description" />
        <Tab label="Material" value="material" />
      </Tabs>

      <Box>
        {activeTab === "item" && (
          <ItemTab
            changeheading={ChangeHeading}
            submitHeading={submitHeading}
            addHeading={onAdding}
            headingData={masterData}
          />
        )}
        {activeTab === "description" && (
          <DescriptionTab
            submitDescription={SubmitComponent}
            masterData={masterData}
            index={descIndex}
            handleChange={changeDescription}
          />
        )}
        {activeTab === "material" && (
          <MaterialTab
            masterData={masterData}
            index={descIndex}
            handleChange={changeWorkOrMaterial}
          />
        )}
      </Box>
    </div>
  );
};

export default CombinedTab;
