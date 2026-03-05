// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   player.ts                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: aelison <aelison@student.42antananarivo.m  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2026/03/05 09:15:49 by aelison           #+#    #+#             //
//   Updated: 2026/03/05 09:18:28 by aelison          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

import { t_player } from '../types';
import { uno_card } from './card';

export class player implements t_player {
	public readonly id: string;
	public readonly name: string;
	public readonly hand: uno_card[];

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
		this.hand = [];
	}

	public add_card(card_to_add: uno_card) {
		if (card_to_add.id.length !== 0) {
			this.hand.push(card_to_add);
		}
		else
			console.log(`failed to add card because id field is empty`);
	}

	public remove_card(card_id: string) {
		let ind: number = -1;

		for (let i: number = 0; i < this.hand.length; i++) {
			if (this.hand[i].id === card_id) {
				ind = i;
				break;
			}
		}
		if (ind !== -1) {
			console.log(`Perfectly deleted card id: {card_id}`);
			this.hand.splice(ind, 1);
		}
	}
}
