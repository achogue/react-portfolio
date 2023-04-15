import React from "react";
import { CommonLoading } from "./Loading";

export const Spinner = () => <CommonLoading color={"black"} />;

export const SmallSpinner = () => {
    return (
        <div className="spinner-border spinner-border-sm text-primary mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export const SmallerSpinner = () => {
    return (
        <div
            className="spinner-border spinner-border-sm text-primary mx-2 d-inline-block"
            role="status"
            style={{
                width: "0.75rem",
                height: "0.75rem",
            }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
