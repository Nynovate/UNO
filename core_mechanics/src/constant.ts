// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   constant.ts                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: aelison <aelison@student.42antananarivo.m  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2026/03/05 09:04:56 by aelison           #+#    #+#             //
//   Updated: 2026/03/05 09:08:28 by aelison          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

import { card_color, card_value } from './types';

export const DECK_DEFINITION = {
	numbers: [
		card_value.zero, card_value.one, card_value.two, card_value.three, 
		card_value.four, card_value.five, card_value.six, card_value.seven, 
		card_value.eight, card_value.nine
	],
	actions: [],
	wilds: []
};

export const COLORS = [
    card_color.red, 
    card_color.blue, 
    card_color.green, 
    card_color.yellow
];

export const UNO_CONFIG = {
    MAX_PLAYERS: 4,
    MIN_PLAYERS: 2,
    STARTING_HAND_SIZE: 4,
    DRAW_TWO_AMOUNT: 4,
    WILD_DRAW_FOUR_AMOUNT: 2
};
