"use client";

/**
 * Calendar page: FullCalendar with day/week/month/list views and event add/delete.
 */
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Header from "@/components/Header";
import type { EventClickArg, DateSelectArg } from "@fullcalendar/core";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay?: boolean;
}

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box className="m-5">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box className="flex justify-between">
        <Box className="flex-[1_1_20%] bg-token-primary-400 p-4 rounded">
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                className="bg-token-greenAccent-500 my-2.5 rounded-sm"
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="flex-[1_1_100%] ml-4">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right:
                "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => {
              setCurrentEvents(
                events.map((e) => ({
                  id: e.id,
                  title: e.title || "",
                  start: e.startStr || "",
                  end: e.endStr,
                  allDay: e.allDay,
                }))
              );
            }}
            initialEvents={[
              { id: "12315", title: "All-day event", date: "2022-09-14" },
              { id: "5123", title: "Timed event", date: "2022-09-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}
