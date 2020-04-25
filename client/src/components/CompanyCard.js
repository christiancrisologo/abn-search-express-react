import React from "react";
import ExpandCard, { Field } from "./ExpandCard";

export default function ({
    Name = "",
    Abn = "",
    AbnStatus = "",
    IsCurrent = "",
    NameType = "",
    PostCode = "",
    State = "",
    Score = "",
    selected = false,
}) {
    return (
        <ExpandCard title={Name} subTitle={Abn} selected={selected}>
            <Field label="Name   " value={Name} />
            <Field label="ABN   " value={Abn} />
            <Field label="ABN Status   " value={AbnStatus} />
            <Field label="isCurrent  " value={IsCurrent} />
            <Field label="Name type " value={NameType} />
            <Field label="Postcode  " value={PostCode} />
            <Field label="State  " value={State} />
            <Field label="Score  " value={Score} />
        </ExpandCard>
    );
}
