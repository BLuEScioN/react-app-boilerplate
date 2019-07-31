import * as React from 'react';
import '../styles/KanbanCard';

export interface IKanbanCard {
    text: string;
    columnId: number;
}

export interface IKanbanCardProps {
    text: string;
    columnId: number;
}

export interface IKanbanCardState {
    text: string;
    columnId: number;
}

export class KanbanCard extends React.Component<IKanbanCardProps, IKanbanCardState> {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            columnId: this.props.columnId
        }
    }

    render() {
        return (
            <div className='kanban-card'>
                <div className='vertical-align-container'>
                    {this.state.text}
                </div>
            </div>
        );
    }

    moveColumn(id: number) {}
}