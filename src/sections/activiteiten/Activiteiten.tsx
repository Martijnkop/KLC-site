"use client"

import { Box, Container, Typography, useTheme, useMediaQuery } from "@mui/material"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab"

export function Activiteiten() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const activities = [
    {
      date: "24 September 2025",
      title: "Opening Keizerlustrum",
    },
    {
      date: "6 Oktober 2025",
      title: "Constitutie",
    },
    {
      date: "8 Oktober 2025",
      title: "Oud en Nieuw",
    },
    {
      date: "10 Oktober 2025",
      title: "Bier-Olympische Spelen",
    },
    {
      date: "11 December 2025",
      title: "Lustrumdrank proeverij",
    },
    {
      date: "31 December 2025 - 1 Januari 2026",
      title: "Jaarwisseling",
    },
    {
      date: "12 Februari 2026",
      title: "Carnavalsactiviteit",
    },
    {
      date: "27 Maart 2026",
      title: "Gala",
    },
    {
      date: "20 - 24 April 2026",
      title: "Keizerlustrumweek",
    },
    {
      date: "15 - 17 Mei 2026",
      title: "Keizerlustrum- weekend",
    },
    {
      date: "17 Juni 2026",
      title: "Sluiting",
    },
    {
      date: "???",
      title: "Mystery Activiteit(en)",
    },
  ]

  return (
    <Box
      component="section"
      id="activiteiten"
      sx={{
        py: 10,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: "2rem", md: "2.5rem" }, color: 'black'}}>
            Activiteiten
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 4,
              backgroundColor: "secondary.main",
              mx: "auto",
              mb: 3,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Keizerlustrum Programma
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          <Timeline position={isMobile ? "right" : "alternate"}>
            {activities.map((activity, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{
                    m: "auto 0",
                    display: isMobile ? "none" : "block",
                  }}
                  align={index % 2 === 0 ? "right" : "left"}
                  variant="h6"
                  color="secondary.main"
                  fontWeight={600}
                >
                  {activity.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      backgroundColor: "secondary.main",
                      width: 2,
                    }}
                  />
                  <TimelineDot
                    sx={{
                      backgroundColor: "secondary.main",
                      border: "4px solid",
                      borderColor: "background.default",
                      boxShadow: 2,
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      backgroundColor: "secondary.main",
                      width: 2,
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  {isMobile && (
                    <Typography
                      variant="h6"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {activity.date}
                    </Typography>
                  )}
                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.primary",
                      
                    }}
                  >
                    {activity.title}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  )
}
