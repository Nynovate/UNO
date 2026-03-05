// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   game_manager.ts                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: aelison <aelison@student.42antananarivo.m  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2026/03/05 15:44:59 by aelison           #+#    #+#             //
//   Updated: 2026/03/05 15:58:04 by aelison          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

import { uno_card } from "./card";
import { player } from "./player";

export class game_manager {
	public all_players: player[];
	public draw_pile: uno_card[];

	public current_player: number;
	public game_direction: number;

	constructor(player_list: player[]) {
		this.all_players = player_list;
		this.draw_pile = [];

		this.current_player = 0;
		this.game_direction = 1;
	}

	public change_direction() {
		this.game_direction *= -1;
	}

	public remove_player(player_id: string) {
		let ind: number = -1;

		for (let i: number = 0; i < this.all_players.length; i++) {
			if (this.all_players[i].id === player_id) {
				ind = i;
				break;
			}
		}
		if (ind !== -1) {
			console.log(`Perfectly deleted card id: {card_id}`);
			this.all_players.splice(ind, 1);
		}
	}

	public next_turn() {
		this.current_player = (
			this.current_player +
			this.game_direction +
			this.all_players.length
		) % this.all_players.length;
	}
}
