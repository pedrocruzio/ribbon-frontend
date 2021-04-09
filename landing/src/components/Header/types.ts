export interface NavItemProps {
  isSelected: boolean;
}

export interface MobileMenuOpenProps {
  isMenuOpen: boolean;
}

export interface AccountStatusVariantProps {
  variant: "desktop" | "mobile";
  showInvestButton?: boolean;
}

export interface WalletStatusProps {}

export type WalletButtonProps = AccountStatusVariantProps & WalletStatusProps;

export type connectorType = "metamask" | "walletConnect";

export interface ConnectorButtonProps {
  status: "normal" | "initializing" | "neglected" | "connected";
}

export interface MenuStateProps {
  isMenuOpen: boolean;
}

export interface WalletCopyIconProps {
  state: "visible" | "hiding" | "hidden";
}