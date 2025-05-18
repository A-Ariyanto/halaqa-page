'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'Term 1',
    dateTime: '17-02-2025',
    summary:
      'Ramadhan is a month of fasting, prayer, reflection and community.',
    timeSlots: [
      {
        name: 'Week 1',
        description: 'Importance of Community and Faith',
        start: '',
        end: '',
      },
      {
        name: 'Week 2',
        description: 'Preparations for Ramadan',
        start: '',
        end: '',
      },
      {
        name: 'Week 3',
        description: 'Ramadhan: Tilawah & tadabbur',
        start: '',
        end: '',
      },
      {
        name: 'Week 4',
        description: 'Ramadhan: Tilawah & tadabbur',
        start: '',
        end: '',
      },
      {
        name: 'Week 5',
        description: 'Ramadhan: Tilawah & tadabbur',
        start: '',
        end: '',
      },
      {
        name: 'Week 6',
        description: 'Rabbani Generation',
        start: '',
        end: '',
      },
      {
        name: 'Week 7',
        description: 'The Role of Charity in Islam',
        start: '',
        end: '',
      },
      {
        name: 'Week 8',
        description: 'Dawah and tarbiyah',
        start: '',
        end: '',
      },
    ],
  },
  {
    date: 'Term 2',
    dateTime: '02-06-2025',
    summary:
      'Eid al-Adha is the second of two Islamic holidays celebrated worldwide each year.',
    timeSlots: [
      {
        name: 'Week 1',
        description: '',
        start: '',
        end: '',
      },
      {
        name: 'Week 2',
        description: '',
        start: '',
        end: '',
      },
      {
        name: 'Week 3',
        description: 'Movie Night – Da’wah Through Stories',
        start: '',
        end: '',
      },
      {
        name: 'Week 4',
        description: '',
        start: '',
        end: '',
      },
      {
        name: 'Week 5',
        description: 'Iftar Jama’ie (Community Iftar)',
        start: '',
        end: '',
      },
      {
        name: 'Week 6',
        description: 'O-Week Trip with MyFundAction',
        start: '',
        end: '',
      },
      {
        name: 'Week 7',
        description: 'Sports & Brotherhood – ISOC Football',
        start: '',
        end: '',
      },
      {
        name: 'Week 8',
        description: 'Reflections & Celebrations',
        start: '',
        end: '',
      },
    ],
  },
  {
    date: 'Term 3',
    dateTime: '15-09-2025',
    summary:
      'We are close to the end of the year. So make sure to make the most of it.',
    timeSlots: [
      {
        name: 'TBA',
        description: '',
        start: '',
        end: '',
      }
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-orange-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-orange-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-orange-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-orange-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-orange-600 sm:text-5xl">
            Our schedule for the year
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-orange-900">
            Our team has prepared exciting events for you this year. We hope to see you
            at all of them inshaAllah!
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
