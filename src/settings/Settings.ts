import {
	GameMode,
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "./enums";

export interface Settings {
	gameMode: GameMode;
	leveling: Leveling;
	abilities: RandomizingAction;
	stats: Toggle;
	keybladeStats: Toggle;
	bonusModifiers: Toggle;
	criticalMode: Toggle;

	expMultiplier: Multiplier;
	valorEXP: Multiplier;
	wisdomEXP: Multiplier;
	limitEXP: Multiplier;
	masterEXP: Multiplier;
	finalEXP: Multiplier;
}

export const defaultSettings: Settings = {
	gameMode: GameMode.GOA_MOD,
	leveling: Leveling.LEVEL_FIFTY,
	abilities: RandomizingAction.RANDOMIZE,
	stats: Toggle.ON,
	keybladeStats: Toggle.ON,
	bonusModifiers: Toggle.ON,
	criticalMode: Toggle.ON,

	expMultiplier: Multiplier.ONE,
	valorEXP: Multiplier.ONE,
	wisdomEXP: Multiplier.ONE,
	limitEXP: Multiplier.ONE,
	masterEXP: Multiplier.ONE,
	finalEXP: Multiplier.ONE,
};
