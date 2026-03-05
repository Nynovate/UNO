// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   types.ts                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: aelison <aelison@student.42antananarivo.m  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2026/03/05 08:10:12 by aelison           #+#    #+#             //
//   Updated: 2026/03/05 08:37:51 by aelison          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

import { uno_card } from "./classes/card";

export enum card_color {
	red = 'red',
	blue = 'blue',
	green = 'green',
	yellow = 'yellow',
	none = 'None'
}

export enum card_value {
	zero = '0',
	one = '1',
	two = '2',
	three = '3',
	four = '4',
	five = '5',
	six = '6',
	seven = '7',
	eight = '8',
	nine = '9',
	skip = 'skip',
	reverse = 'reverse',
	wild = 'wild',	//change color
	draw_two = 'draw_two',
	wild_draw_four = 'wild_draw_four'
}

export enum game_state {
	waiting = 'waiting',
	playing = 'playing',
	end_game = 'end_game'
}

export interface t_card {
	id: string;
	color: card_color;
	value: card_value;
}

export interface t_player {
	id: string;
	name: string;
	hand: uno_card[];
}
