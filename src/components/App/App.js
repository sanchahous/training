import React from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TrainingList from "../TrainingList";
import TrainingStatusFilter from "../TrainingStatusFilter";

const App = () => {
    const trainingData = [
        { label: 'жим лежа', important: false, id: 1 },
        { label: 'разведение гантелей', important: true, id: 2 },
        { label: 'подтягивание широким хватом', important: false, id: 3 },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TrainingStatusFilter />
            <TrainingList trainings={trainingData} />
        </div>
    );
};

export default App
