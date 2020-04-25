import React from "react";
import ExpandCard, { Field } from "./ExpandCard";

export default function ({
    EntityTypeCode = "",
    Abn = "",
    AbnStatus = "",
    EntityName = "",
    EntityTypeName = "",
    Gst = "",
    selected = false,
}) {
    return (
        <ExpandCard title={EntityName} subTitle={Abn} selected={selected}>
            <Field label="ABN   " value={Abn} />
            <Field label="Entity Type Code   " value={EntityTypeCode} />
            <Field label="Entity Name  " value={EntityName} />
            <Field label="Abn Status  " value={AbnStatus} />
            <Field label="Gst  " value={Gst} />
            <Field label="EntityTypeName  " value={EntityTypeName} />
        </ExpandCard>
    );
}
