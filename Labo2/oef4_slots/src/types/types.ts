export interface NavItem{
    to: string;
    label: string;
    end?: boolean;
}

export interface SlotItems{
    id: number;
    name: string,
    image: string;
}

export interface SlotMachineProps {
    slots: number;
}

export interface SlotProps {
    value: number;
}