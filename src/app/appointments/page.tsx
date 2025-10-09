"use client"

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import ProgressSteps from '@/components/appointments/ProgressSteps';
import DoctorSelectionStep from '@/components/appointments/DoctorSelectionSteps';

function AppointementsPage() {

    // state management for the booking process - this could be done with something like Zustand for larger apps
    const [selectedDentistId, setSelectedDentistId] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [currentStep, setCurrentStep] = useState(1); // 1: select dentist, 2: select time, 3: confirm
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [bookedAppointment, setBookedAppointment] = useState<any>(null);


    const handleSelectDentist = (dentistId: string) => {
        setSelectedDentistId(dentistId);
        setSelectedDate("");
        setSelectedTime("");
        setSelectedType("");
    };

    const handleBookAppointment = () => {

    };
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
                {/* header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
                    <p className="text-muted-foreground">Find and book with verified dentists in your area</p>
                </div>
                <ProgressSteps currentStep={currentStep} />

                {
                    currentStep === 1 && (
                        <DoctorSelectionStep
                            selectedDentistId={selectedDentistId}
                            onContinue={() => setCurrentStep(2)}
                            onSelectDentist={handleSelectDentist}

                        />
                    )
                }
            </div>


        </>
    )
}

export default AppointementsPage