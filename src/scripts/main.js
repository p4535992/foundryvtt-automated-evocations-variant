import CONSTANTS from "./constants.js";

const AECONSTS = {
    MN: CONSTANTS.MODULE_ID,
    animations: {},
    animationFunctions: {
        fire: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/fire_spiral_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(750)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/fire_earth_explosion_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1000,
            group: "elemental",
        },
        air: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/air_infinity_RECTANGLE_01.webm`)
                    .belowTokens()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(750)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/air_portal_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(750)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/air_puff_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1650,
            group: "elemental",
        },
        lightning: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/ring_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55,
                    )
                    .elevation(tokenData.elevation)
                    .wait(750)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/electric_blast_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .repeats(6, 100, 170, 250, 320, 400)
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1650,
            group: "elemental",
        },
        lightning2: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(
                        `modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/LightningBall_01_Regular_Blue_400x400.webm`,
                    )
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55,
                    )
                    .elevation(tokenData.elevation)
                    .wait(750)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/LightningStrike_01a_800x800.webm`)
                    .atLocation(template)
                    .repeats(3, 100, 400, 600)
                    .randomizeMirrorX()
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55 *
                            2,
                    )
                    .elevation(tokenData.elevation)
                    .wait(750)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/Impact_12_Regular_Blue_400x400.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1650,
            group: "elemental",
        },
        water: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/water_blast_RAY_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .repeats(6, 50, 25, 75, 60, 20)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55,
                    )
                    .elevation(tokenData.elevation)
                    .wait(500)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/create_water_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1000,
            group: "elemental",
        },
        ice1: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(
                        `modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`,
                    )
                    .belowTokens()
                    .fadeIn(500, { ease: "easeOutCubic", delay: 500 })
                    .fadeOut(1500)
                    .rotateIn(90, 2500, { ease: "easeInOutCubic" })
                    .rotateOut(350, 1500, { ease: "easeInCubic" })
                    .scaleIn(1, 1200, { ease: "easeInOutCubic" })
                    .scaleOut(0, 1500, { ease: "easeInCubic" })
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(650)
                    .effect()
                    .file(
                        `modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`,
                    )
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1500,
            group: "elemental",
        },
        darkness: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/Whirlwind_01_BlueGrey_01_400x400.webm`)
                    .belowTokens()
                    .fadeIn(500, { ease: "easeOutCubic", delay: 500 })
                    .fadeOut(1500)
                    .rotateIn(90, 2500, { ease: "easeInOutCubic" })
                    .rotateOut(350, 1500, { ease: "easeInCubic" })
                    .scaleIn(1, 1200, { ease: "easeInOutCubic" })
                    .scaleOut(0, 1500, { ease: "easeInCubic" })
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(950)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/Darkness_01_Black_600x600.webm`)
                    .randomRotation()
                    .fadeIn(500, { ease: "easeOutCubic", delay: 500 })
                    .fadeOut(1500)
                    .rotateIn(90, 2500, { ease: "easeInOutCubic" })
                    .rotateOut(350, 1500, { ease: "easeInCubic" })
                    .scaleIn(0, 1200, { ease: "easeInOutCubic" })
                    .scaleOut(1, 1500, { ease: "easeInCubic" })
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.45,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1500,
            group: "magical",
        },
        energy1: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/energy_spark_CIRCLE_01.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template, { randomOffset: true })
                    .repeats(6, 50, 25, 75, 60, 20)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.15,
                    )
                    .elevation(tokenData.elevation)
                    .wait(500)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/energy_pulse_yellow_CIRCLE.webm`)
                    .belowTokens()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 650,
            group: "magical",
        },
        magic1: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/magic_explosion_symbol_CIRCLE.webm`)
                    .belowTokens()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1150,
            group: "magical",
        },
        magic2: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(
                        `modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/Conjuration_01_Yellow_Circle_800x800.webm`,
                    )
                    .belowTokens()
                    .fadeIn(500, { ease: "easeOutCubic", delay: 500 })
                    .fadeOut(1500)
                    .rotateIn(90, 2500, { ease: "easeInOutCubic" })
                    .rotateOut(350, 1500, { ease: "easeInCubic" })
                    .scaleIn(1, 1200, { ease: "easeInOutCubic" })
                    .scaleOut(0, 1500, { ease: "easeInCubic" })
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(650)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/Explosion_02_Blue_400x400.webm`)
                    .randomRotation()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.55,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 820,
            group: "magical",
        },
        heart: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/heart_red_SQUARE.webm`)
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 400,
        },
        music: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/music_RECTANGLE.webm`)
                    .belowTokens()
                    .randomRotation()
                    .atLocation(template, { randomOffset: true })
                    .repeats(6, 150, 225, 375, 460, 520)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.65,
                    )
                    .elevation(tokenData.elevation)
                    .wait(900)
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/magic_symbol_SQUARE_05.webm`)
                    .belowTokens()
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 1350,
        },
        music2: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(
                        `modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
                    )
                    .belowTokens()
                    .atLocation(template)
                    .randomRotation()
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .wait(100)
                    .effect()
                    .file(
                        `modules/${CONSTANTS.MODULE_ID}/assets/animations/JB2A/BardicInspiration_01_Regular_GreenOrange_400x400.webm`,
                    )
                    .atLocation(template)
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.45,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 600,
        },
        fourelements: {
            fn: async (template, tokenData) => {
                await new Sequence()
                    .effect()
                    .file(`modules/${CONSTANTS.MODULE_ID}/assets/animations/four_element_strike_SQUARE_01.webm`)
                    .atLocation(template)
                    .belowTokens()
                    .scale(
                        ((Math.max(tokenData.width, tokenData.height) *
                            (tokenData.texture.scaleX + tokenData.texture.scaleY)) /
                            2) *
                            0.35,
                    )
                    .elevation(tokenData.elevation)
                    .play();
            },
            time: 700,
            group: "elemental",
        },
    },
};
export default AECONSTS;
