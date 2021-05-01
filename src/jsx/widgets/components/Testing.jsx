import React, { useState, useEffect } from "react";

const Testing = () => {

    useEffect(() => {
        console.log("Test!");
    }, []);

    console.log("This is Test 1");
    return (
        <div>This is a test component</div>
    );
}

export default Testing;