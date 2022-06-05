import React from 'react'
import styled from "styled-components"
import Sec1 from "./Sec1"
import Section from "./Section"
import Sec2 from "./Sec2"

function home() {
  return (
    <Container>

         <Section
            title="Model S"
            description="Order Online for Touchless Delievery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
          
          
          <Sec1
                      title="Model Y"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-y.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />

<Sec2
                      title="Model 3"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-3.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />
             <Sec2
                        title="Model X"
                        description="Order Online for Touchless Delievery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
              />
       <Sec2
                      title="Lowest Costing solar panel in World"
                      description="Money Back Guranteed"
                      backgroundImg="solar-panel.jpg"
                      leftBtnText="Order Now"
                      rightBtnText="Learn More"
            />
                <Sec2
                      title="Solar Roof "
                      description="Produce Clean Energy From Your Roof "
                      backgroundImg="solar-roof.jpg"
                      leftBtnText="Shop Now"
                      rightBtnText="Learn More"
            />
                <Sec2
                      title="Accessories"
                      description=""
                      backgroundImg="accessories.jpg"
                      leftBtnText="Shop Now"
                      />
                     
      
    </Container>
  )
}

export default home
const Container =styled.div`
  height: 100vh;
  `