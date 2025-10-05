import React from "react";
import { render } from "@testing-library/react";
import { describe,test,it,expect } from "vitest";
import '@testing-library/jest-dom/vitest'
import HeroCom from "../src/HeroCom";



describe('max',()=>{
it('should be a button to reserve a table',()=>{

    render(<HeroCom></HeroCom>);
    const heading = screen.getByText("Reserve");
      expect(heading).toBeInTheDocument();




})

})