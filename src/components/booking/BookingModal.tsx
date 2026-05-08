"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import { StepRoomSelector } from "./StepRoomSelector";
import { StepDatesGuests } from "./StepDatesGuests";
import { StepGuestDetails } from "./StepGuestDetails";
import { StepSummary } from "./StepSummary";
import { calculatePriceSummary } from "@/lib/bookingUtils";
import { formatCurrency } from "@/lib/utils";

const steps = [
  { number: 1, label: "Rooms" },
  { number: 2, label: "Dates" },
  { number: 3, label: "Details" },
  { number: 4, label: "Review" },
];

export function BookingModal() {
  const {
    isOpen,
    closeBooking,
    currentStep,
    prevStep,
    nextStep,
    booking,
  } = useBookingStore();

  const summary = calculatePriceSummary(booking);
  const hasRooms = booking.selectedRooms.length > 0;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return hasRooms;
      case 2:
        return !!(booking.checkIn && booking.checkOut && summary.nights > 0);
      case 3:
        return !!(booking.guestName.trim() && booking.guestPhone.trim());
      case 4:
        return true;
      default:
        return false;
    }
  };

  const stepLabels = ["Select Rooms", "Choose Dates", "Your Details", "Confirm Booking"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 z-50 bg-oak-black/85 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-4 top-4 bottom-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-6 md:bottom-6 md:w-full md:max-w-2xl lg:max-w-3xl z-50 bg-oak-dark border border-white/8 rounded-sm flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    className="text-oak-muted hover:text-oak-cream transition-colors duration-200"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
                <div>
                  <p className="label-luxury text-[0.6rem]">
                    Step {currentStep} of 4
                  </p>
                  <p className="font-playfair text-oak-cream text-lg mt-0.5">
                    {stepLabels[currentStep - 1]}
                  </p>
                </div>
              </div>
              <button
                onClick={closeBooking}
                className="text-oak-muted hover:text-oak-cream transition-colors duration-200 p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Step Progress */}
            <div className="flex px-6 pt-4 pb-2 gap-2 shrink-0">
              {steps.map((step) => (
                <div key={step.number} className="flex-1">
                  <div
                    className={`h-0.5 rounded-full transition-all duration-500 ${
                      step.number <= currentStep ? "bg-oak-gold" : "bg-white/10"
                    }`}
                  />
                  <p
                    className={`text-[0.58rem] font-light mt-1.5 tracking-wide transition-colors duration-300 ${
                      step.number <= currentStep ? "text-oak-gold" : "text-oak-muted"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="flex-1 overflow-y-auto modal-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full"
                >
                  {currentStep === 1 && <StepRoomSelector />}
                  {currentStep === 2 && <StepDatesGuests />}
                  {currentStep === 3 && <StepGuestDetails />}
                  {currentStep === 4 && <StepSummary />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer — Price + Next */}
            {currentStep < 4 && (
              <div className="px-6 py-4 border-t border-white/5 bg-oak-dark shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    {summary.grandTotal > 0 && summary.nights > 0 ? (
                      <>
                        <p className="text-oak-muted text-xs font-light">
                          {summary.nights} night{summary.nights !== 1 ? "s" : ""} · Estimated total
                        </p>
                        <p className="font-playfair text-xl text-oak-gold mt-0.5">
                          {formatCurrency(summary.grandTotal)}
                        </p>
                      </>
                    ) : hasRooms ? (
                      <>
                        <p className="text-oak-muted text-xs font-light">Starting from</p>
                        <p className="font-playfair text-xl text-oak-gold mt-0.5">
                          {formatCurrency(
                            booking.selectedRooms.reduce(
                              (s, r) => s + r.pricePerNight * r.quantity,
                              0
                            )
                          )}
                          <span className="text-oak-muted text-xs font-inter font-light ml-1">/ night</span>
                        </p>
                      </>
                    ) : (
                      <p className="text-oak-muted text-sm font-light">
                        Select rooms to see pricing
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className={`px-8 py-3 font-inter font-medium tracking-widest uppercase text-[0.68rem] transition-all duration-300 ${
                      canProceed()
                        ? "bg-oak-gold text-oak-black hover:bg-oak-gold-light cursor-pointer"
                        : "bg-oak-dark-3 text-oak-muted cursor-not-allowed"
                    }`}
                  >
                    {currentStep === 3 ? "Review Booking" : "Continue →"}
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
