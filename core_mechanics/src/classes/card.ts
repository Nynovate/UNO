// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   card.ts                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: aelison <aelison@student.42antananarivo.m  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2026/03/05 08:26:43 by aelison           #+#    #+#             //
//   Updated: 2026/03/05 09:18:25 by aelison          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

import { card_color, card_value, t_card } from '../types';

export class uno_card implements t_card {
	public readonly id: string;
	public readonly color: card_color;
	public readonly value: card_value;

	constructor(id: string, color: card_color, value: card_value) {
		this.id = id;
		this.color = color;
		this.value = value;
	}

	public can_be_played(card_to_check: uno_card): boolean {
		if (this.value === 'wild') {
			return true;
		}
		if (this.color === card_to_check.color) {
			return true;
		}
		if (this.value === card_to_check.value) {
			return true;
		}
		return false;
	}
}
