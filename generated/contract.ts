export namespace Generated {
  export namespace Enums {
    export enum ComponentManifestPropsKind {
      Style = 0,
      Behavior = 1,
    }

    export enum ComponentManifestPropsStyleValueKind {
      Unset = 0,
      Literal = 1,
      DesignToken = 2,
    }

    export enum StyleValueType {
      String = 0,
      Number = 1,
    }

    export enum StyleValueUnit {
      Px = 0,
      Rem = 1,
      Percent = 2,
    }
  }

  export namespace Types {
    export interface ComponentManifestDefinition {
      name: string | null;
      tagName: string | null;
      baseProps: ComponentManifestPropsDefinition[] | null;
      variants: string[] | null;
      variantOverrides?: {
        [key: string]: ComponentManifestPropsDefinition[];
      } | null;
    }

    export interface ComponentManifestPropsBehaviorDefinition {
      key: string | null;
    }

    export interface ComponentManifestPropsDefinition {
      kind?: Enums.ComponentManifestPropsKind;
    }

    export interface ComponentManifestPropsStyleDefinition {
      key: string | null;
      name: string | null;
      cssProperty: string | null;
      valueType: Enums.StyleValueType;
      unit?: Enums.StyleValueUnit;
    }
  }
}
