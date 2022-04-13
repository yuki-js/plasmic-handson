// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cY4nGuqRRerez3gozW4dq3
// Component: DAiyvdgK_F
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_hands_on.module.css"; // plasmic-import: cY4nGuqRRerez3gozW4dq3/projectcss
import sty from "./PlasmicWelcome.module.css"; // plasmic-import: DAiyvdgK_F/css

export type PlasmicWelcome__VariantMembers = {};

export type PlasmicWelcome__VariantsArgs = {};
type VariantPropType = keyof PlasmicWelcome__VariantsArgs;
export const PlasmicWelcome__VariantProps = new Array<VariantPropType>();

export type PlasmicWelcome__ArgsType = {};
type ArgPropType = keyof PlasmicWelcome__ArgsType;
export const PlasmicWelcome__ArgProps = new Array<ArgPropType>();

export type PlasmicWelcome__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultWelcomeProps {}

function PlasmicWelcome__RenderFunc(props: {
  variants: PlasmicWelcome__VariantsArgs;
  args: PlasmicWelcome__ArgsType;
  overrides: PlasmicWelcome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1Pl85
            )}
          >
            {"Welcome"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pnn0D
            )}
          >
            {
              "アカウントを登録したら、まず、プロジェクトをコピーしましょう\n左のペーン、または、PgUp/PgDnでページを移動できます"
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWelcome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWelcome__VariantsArgs;
    args?: PlasmicWelcome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWelcome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWelcome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicWelcome__ArgProps,
      internalVariantPropNames: PlasmicWelcome__VariantProps
    });

    return PlasmicWelcome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWelcome";
  } else {
    func.displayName = `PlasmicWelcome.${nodeName}`;
  }
  return func;
}

export const PlasmicWelcome = Object.assign(
  // Top-level PlasmicWelcome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicWelcome
    internalVariantProps: PlasmicWelcome__VariantProps,
    internalArgProps: PlasmicWelcome__ArgProps
  }
);

export default PlasmicWelcome;
/* prettier-ignore-end */
