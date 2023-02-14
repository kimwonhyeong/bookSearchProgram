// import original module declarations
import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    top: string,
    middle: string,
    bottom: string,
    yellow: string,
  }
}