import { IconButton } from '@mui/material'
import { useAppSelector } from '../../libs/redux/hooks'

export default function JupiterButton() {

    const theme = useAppSelector(state => state.theme.current.styles)

    return (
        
            <IconButton style={{ border: 'solid thin red', borderColor: theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor }}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49288 14.4542L4.49268 14.4541C3.92262 14.1361 3.39541 13.75 2.92208 13.3055C3.56555 13.4731 4.18623 13.7248 4.76763 14.0556L4.76763 14.0556L4.7706 14.0572C5.36802 14.3917 5.89527 14.7835 6.34369 15.2102C5.7 15.0346 5.07835 14.7812 4.49288 14.4542Z" fill="url(#paint0_linear_5268_11223)" stroke={theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor} />
                    <path d="M5.74613 12.3797L5.74653 12.38C7.18569 13.1851 8.32105 14.2802 9.06511 15.4881C9.31615 15.4719 9.56566 15.4446 9.81367 15.4063C9.35338 14.0571 8.1127 12.6035 6.27216 11.5726L5.74613 12.3797ZM5.74613 12.3797C4.30343 11.5744 2.75483 11.1704 1.30249 11.1474C1.19825 10.9403 1.1039 10.7293 1.01942 10.5143M5.74613 12.3797L1.01942 10.5143M1.01942 10.5143C2.48332 10.2211 4.42519 10.5398 6.27208 11.5726L1.01942 10.5143Z" fill="url(#paint1_linear_5268_11223)" stroke={theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor} />
                    <mask id="path-3-inside-1_5268_11223" fill="white">
                        <path d="M16.7724 6.25072C16.4951 5.17389 15.9995 4.16553 15.3163 3.28822C14.6222 2.39985 13.7576 1.65919 12.7732 1.10978C11.7761 0.555008 10.6807 0.199431 9.54785 0.0628434C8.41084 -0.0728801 7.25833 0.011715 6.15332 0.312004C7.99574 0.529163 10.0393 1.19435 12.0452 2.31558C14.0499 3.43566 15.6649 4.81633 16.7724 6.24958" />
                    </mask>
                    <path d="M16.7724 6.25072C16.4951 5.17389 15.9995 4.16553 15.3163 3.28822C14.6222 2.39985 13.7576 1.65919 12.7732 1.10978C11.7761 0.555008 10.6807 0.199431 9.54785 0.0628434C8.41084 -0.0728801 7.25833 0.011715 6.15332 0.312004C7.99574 0.529163 10.0393 1.19435 12.0452 2.31558C14.0499 3.43566 15.6649 4.81633 16.7724 6.24958" fill="url(#paint2_linear_5268_11223)" />
                    <path d="M15.3163 3.28822L16.1052 2.67379L16.1043 2.67258L15.3163 3.28822ZM12.7732 1.10978L13.2606 0.236571L13.2594 0.235928L12.7732 1.10978ZM9.54785 0.0628434L9.66756 -0.929967L9.66638 -0.930107L9.54785 0.0628434ZM6.15332 0.312004L5.89108 -0.652998L6.03626 1.30513L6.15332 0.312004ZM12.0452 2.31558L11.5573 3.18847L11.5574 3.18856L12.0452 2.31558ZM17.7408 6.00137C17.4293 4.79184 16.8727 3.65921 16.1052 2.6738L14.5273 3.90264C15.1263 4.67184 15.5609 5.55594 15.804 6.50008L17.7408 6.00137ZM16.1043 2.67258C15.3282 1.67917 14.3614 0.850942 13.2606 0.236572L12.2859 1.98298C13.1539 2.46743 13.9163 3.12052 14.5282 3.90386L16.1043 2.67258ZM13.2594 0.235928C12.149 -0.381878 10.9291 -0.777859 9.66756 -0.929966L9.42815 1.05565C10.4323 1.17672 11.4032 1.49189 12.287 1.98362L13.2594 0.235928ZM9.66638 -0.930107C8.40183 -1.08106 7.12004 -0.986971 5.89108 -0.652998L6.41556 1.27701C7.39662 1.0104 8.41985 0.935295 9.42933 1.05579L9.66638 -0.930107ZM6.03626 1.30513C7.73404 1.50524 9.65263 2.12383 11.5573 3.18847L12.5331 1.44269C10.426 0.264879 8.25743 -0.446914 6.27038 -0.681121L6.03626 1.30513ZM11.5574 3.18856C13.4612 4.25225 14.9671 5.54883 15.9811 6.86103L17.5637 5.63813C16.3626 4.08383 14.6386 2.61907 12.5329 1.4426L11.5574 3.18856Z" fill={theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor} mask="url(#path-3-inside-1_5268_11223)" />
                    <path d="M13.6687 10.4444L13.6685 10.4442C12.7823 9.02557 11.2387 7.63608 9.30192 6.55253C7.36726 5.47068 5.34368 4.86619 3.61756 4.82616L13.6687 10.4444ZM13.6687 10.4444C14.1699 11.2458 14.3834 11.9413 14.3867 12.4897M13.6687 10.4444L14.3867 12.4897M14.3867 12.4897C14.2529 12.1435 14.0874 11.7957 13.8915 11.4482L13.8908 11.447C12.8883 9.67977 11.1669 8.06912 9.05957 6.8912C6.95182 5.71303 4.65029 5.07375 2.56735 5.11103L2.56731 5.11103C2.19416 5.11775 1.83338 5.14625 1.48681 5.19618C1.98772 4.95223 2.69942 4.80527 3.61737 4.82615L14.3867 12.4897Z" fill="url(#paint3_linear_5268_11223)" stroke={theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor} />
                    <path d="M0.507479 8.10705C0.510889 8.18198 0.515403 8.25679 0.52102 8.33148C0.848944 8.26348 1.18135 8.2179 1.51594 8.19515C3.43695 8.05596 5.52749 8.57136 7.40918 9.62451L0.507479 8.10705ZM0.507479 8.10705C1.18747 7.71058 2.20547 7.53371 3.43471 7.64685C4.78427 7.77106 6.3208 8.24031 7.7886 9.06063L0.507479 8.10705ZM11.6282 13.8551C10.7975 12.1734 9.29152 10.6774 7.40929 9.62457L11.6282 13.8551ZM11.6282 13.8551C11.7733 14.1469 11.8964 14.4463 11.9975 14.7531C12.0797 14.7157 12.1613 14.6769 12.2422 14.6368C12.2606 13.8858 11.9223 12.9599 11.2161 11.9946C10.4391 10.9324 9.25716 9.88165 7.78865 9.06067L11.6282 13.8551Z" fill="url(#paint4_linear_5268_11223)" stroke={theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor} />
                    <path d="M10.8294 4.0205C12.5682 4.99255 13.9948 6.20612 14.921 7.46223C13.8346 6.24358 12.4023 5.10232 10.7093 4.15572C9.10699 3.2598 7.4656 2.64715 5.91008 2.32642C7.45208 2.51049 9.17042 3.09307 10.8294 4.0205Z" fill="url(#paint5_linear_5268_11223)" stroke={theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor} />
                    <defs>
                        <linearGradient id="paint0_linear_5268_11223" x1="26.5707" y1="-44.2529" x2="-13.8391" y2="-1.95501" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F01E31" />
                            <stop offset="1" stop-color="#00BEF0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_5268_11223" x1="17.9925" y1="-17.4922" x2="-4.24915" y2="7.69596" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F01E31" />
                            <stop offset="1" stop-color="#00BEF0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_5268_11223" x1="7.92145" y1="8.31944" x2="-13.8173" y2="32.2789" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F01E31" />
                            <stop offset="1" stop-color="#00BEF0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_5268_11223" x1="12.5279" y1="-1.79873" x2="-1.45713" y2="15.2619" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F01E31" />
                            <stop offset="1" stop-color="#00BEF0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_5268_11223" x1="14.7016" y1="-7.4341" x2="-1.38981" y2="12.2302" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F01E31" />
                            <stop offset="1" stop-color="#00BEF0" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_5268_11223" x1="11.1694" y1="3.24918" x2="3.89454" y2="16.241" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F01E31" />
                            <stop offset="1" stop-color="#00BEF0" />
                        </linearGradient>
                    </defs>
                </svg>
            </IconButton>
        
    )
}