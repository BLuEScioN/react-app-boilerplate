import * as React from 'react';
import { IKanbanCard, KanbanCard } from './KanbanCard';
import '../styles/KanbanColumn';

export interface IKanbanColumn {
    name: string;
    cards: IKanbanCard[];
}

export interface IKanbanColumnProps {
    name: string;
    cards: IKanbanCard[];
}

export interface IKanbanColumnState {}


export class KanbanColumn extends React.Component<IKanbanColumnProps, IKanbanColumnState> {
    constructor(props) {
        super(props);
    }

    render() {
        let columnHeaderClasses=`kanban-column-header ${this.columnColorSelector(this.props.name)}`;

        return (
            <div className='kanban-column'>
                <div className={`flex-center-container ${columnHeaderClasses}`}>
                    {this.props.name}
                </div>
                <div className='card-container'>
                    {this.renderCards(this.props.cards)}
                </div>
            </div>
        );
    }

    renderCards(cards: IKanbanCard[]): JSX.Element[] {
        return cards.map((card) => <KanbanCard text={card.text} columnId={card.columnId}/>);
    }

    addCard() {
        window.prompt()
    }

    columnColorSelector(name: string): string {
        if (name === 'Winnie') {
            return 'Winnie';
        }if (name === 'Bob') {
            return 'Bob';
        }if (name === 'Thomas') {
            return 'Thomas';
        }if (name === 'George') {
            return 'George';
        } else {
            return 'Blue';
        }
    }
}