import React, { useMemo } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import cx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: theme.palette.common.white,
  },
  imageAvatar: {
    "& .MuiAvatar-img": {
      width: "auto",
    },
    padding: 1.2,
  },
}));

const getNameInitials = (name) => {
  if (!name || !name.length) return "";
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
};

const AvatarWithInitial = ({
  className,
  label,
  useNameInitial,
  children,
  useRandomColors,
  color = "initial",
  labelComponent,
  ...rest
}) => {
  const backgroundColor = useMemo(
    () =>
      useRandomColors ? "#" + Math.random().toString(16).substr(-6) : color,
    [color, useRandomColors]
  );

  const labelStr = useNameInitial
    ? getNameInitials(label || children)
    : label || children;
  return <Avatar style={{ backgroundColor }}>{labelStr}</Avatar>;
};

export default ({
  className,
  label,
  useNameInitial,
  children,
  useRandomColors,
  color,
  labelComponent,
  src,
  ...rest
}) => {
  const classes = useStyles();
  return src ? (
    <Avatar
      {...rest}
      src={src}
      className={cx(classes.root, classes.imageAvatar, className)}
    />
  ) : (
    <AvatarWithInitial
      {...rest}
      className={cx(classes.root, className)}
      label={label}
      useNameInitial={useNameInitial}
      useRandomColors={useRandomColors}
      color={color}
      labelComponent={labelComponent}
    />
  );
};
