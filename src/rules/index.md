---
layout: base.njk
title: Rules — The Crux System
subtitle: Fast, elegant, dice-pool mechanics for tiny adventurers
nav_order: 2
---

<div class="callout callout-info">
<strong>Mechanics highlights</strong>
<ul>
<li>Roll tests with multiple advantages or disadvantages (like Blades in the Dark)</li>
<li>Combat rolls almost always hit — you only roll damage</li>
<li>Action and reaction economy based on turn count</li>
<li>Exploding crits</li>
<li>Dice fail mitigation with Grit, a fluid currency you spend to improve future odds</li>
</ul>
</div>

---

## 1. Characters and attributes

Heroes have four attributes:

| Attribute | Covers |
|-----------|--------|
| **Strength (STR) 💪** | Power, toughness, lifting, grappling, STR-based weapons, some physical saves |
| **Dexterity (DEX) 🎯** | Agility, reflexes, stealth, finesse weapons, bows, Initiative |
| **Intelligence (INT) 🧠** | Knowledge, analysis, magic theory, investigation |
| **Will (WIL) ✨** | Courage, presence, empathy, social influence, mental resilience |

Each attribute has two mechanical pieces:

1. A **modifier** (for example from −1 to +5) used for damage, spell effects, DCs and anything the game ties directly to attribute scores.
2. A **Boon/Bane rating** 🎲 from −3 to +3 that affects how many dice you roll on tests.

Each class also has:
- **Key attributes** — usually two attributes that power most of its class features.
- **Attack die type 🎲** — the die size they roll when making attacks (e.g. d6, d8).

---

## 2. Core resolution: Attribute tests with Boons and Banes

Any non-trivial action with an uncertain outcome uses an **attribute test** 🎲.

### 2.1 Building the dice pool

1. **Pick an attribute** — STR, DEX, INT or WIL, whichever matches what they are doing.
2. **Start at 1d6** — every test starts with a pool of one die.
3. **Add Boons and Banes** ⚖️
   - Start from the attribute's own Boon/Bane rating.
   - Add **Boons** ✅ for things that help: strong positioning, good tools, help from another hero, class advantages, clever plans, favourable conditions.
   - Add **Banes** ❌ for things that hurt: bad footing, darkness, rushing, being outnumbered, conditions like Frightened, hostile environment.
4. **Cancel out** — Boons and Banes cancel one-for-one. Only the net result matters.
5. **Set the pool size**
   - Net 0: roll **1d6**, keep that result.
   - Net +N: roll **1 + N d6** and keep the **highest** single die. ⬆️
   - Net −N: roll **1 + N d6** and keep the **lowest** single die. ⬇️

### 2.2 Reading the result

| Result | Outcome |
|--------|---------|
| **1–2** | ❌ **Failure.** You do not get what you wanted. The GM hits you with a clear consequence. |
| **3–4** | ⚠️ **Success with consequences.** You succeed, but with a cost, complication, or future trouble. |
| **5–6** | ✅ **Full success.** You get what you wanted, no serious downside. |

### 2.3 Optional: Position and Effect

Each action can have:
- **Position** — Controlled, Risky, or Desperate. Guides how hard consequences hit on 1–2 or 3–4.
- **Effect** — Limited, Standard, or Great. Guides how big the success is on 5–6.

These do not change the die result — they guide narration.

---

## 3. Grit

**Grit** is a meta-currency that rewards brutal failures and improves your odds on later rolls. Each hero tracks Grit from **0 to 5**.

### 3.1 Gaining Grit

You gain **1 Grit** when:
- You make an attack, attribute test, save, or Initiative roll
- The **kept die** shows a **1**
- You are not already at 5 Grit

You gain at most 1 Grit per roll, even if several dice show 1. You cannot spend freshly earned Grit on the same roll.

### 3.2 Spending Grit: Steady the roll

**Cost:** 1 Grit
**Timing:** Declared **before** rolling

**Effect** — choose one:
- Add 1 Boon to the roll, or
- Cancel 1 Bane from the roll

Rules:
- You choose which effect each time.
- You can only use Steady the Roll once per roll.
- You cannot use Grit on the roll that just generated it.

---

## 4. Saves

When the world acts on a hero and they try to resist (poison, fire, fear, charms, traps, etc.) they make a **save** — which is just an attribute test aimed at resisting an effect.

- Pick STR, DEX, INT or WIL depending on how they resist.
- Build the dice pool with Boons/Banes as normal.

| Result | Outcome |
|--------|---------|
| **5–6** | ✅ You fully resist the effect |
| **3–4** | ⚠️ Partial resistance — half damage, weaker condition, or some downside |
| **1–2** | ❌ You take the full effect |

Each hero has:
- One **advantaged save type** — starts with +1 Boon ✅
- One **disadvantaged save type** — starts with +1 Bane ❌
- Two **neutral** save types

Situational Boons/Banes stack on top of this.

---

## 5. Initiative

Initiative uses a **DEX attribute test** and determines how many actions you start with in the first round.

| Result | Starting actions |
|--------|-----------------|
| **5–6** | ⚡⚡⚡ 3 actions |
| **3–4** | ⚡⚡ 2 actions |
| **1–2** | ⚡ 1 action |

From the **second round onwards**, everyone gets 3 actions at the start of their turn, regardless of Initiative.

**Ambushes and surprise** are handled with Boons and Banes on the Initiative roll. If the heroes are clearly ambushing, give them extra Boons or just decide they all count as 5–6.

**Turn order** — heroes act in table order, then all enemies, unless you want a more detailed order. In case of ties, heroes act before enemies; ties between heroes are resolved by table order.

---

## 6. Actions and reactions

### 6.1 Actions

On your turn you get **3 actions** ⚡ (modified by Initiative on the first round).

| Action | Cost |
|--------|------|
| **Attack** ⚔️ | 1 action |
| **Cast a spell** 🔮 | Usually 1 action (some powerful spells cost 2 or 3) |
| **Move** 🏃 up to your Speed | 1 action |
| **Assess** 👁️ (observe, analyse, find an opening) | 1 action |
| Class abilities, items, or special moves | As listed |

Some strong effects cost **2 or 3 actions**. Multi-action effects can be stretched across turns if you maintain Concentration or the rules for that effect allow it.

### 6.2 Reactions

Reactions are powerful off-turn moves taken during someone else's turn. Each reaction costs **1 action** spent from your **unused actions on your current turn** (or actions banked at the end of your previous turn, at GM discretion).

Core reactions:

| Reaction | Effect |
|----------|--------|
| **Defend** 🛡️ | Protect yourself or an ally from an attack |
| **Interpose** 🚧 | Move into harm's way for an ally |
| **Opportunity Attack** ⚡ | Strike someone who moves carelessly in melee or does something risky |
| **Help** 🤝 | Give an ally +1 Boon on a roll |

Each type of reaction can be used **at most once per round**.

---

## 7. Attacks and combat

### 7.1 Making an attack

1. Confirm what you are using (weapon, spell, class ability). That entry tells you which **attribute** it keys off and which **attack die type** you roll.
2. Identify the **Primary Die** (normally rolled separately or marked before rolling).
3. Check the Primary Die:
   - **Shows 1** → the attack **misses entirely** ❌
   - **Shows its maximum value** → **critical hit** 💥
   - **Otherwise** → the attack hits ✅
4. On a hit: sum the damage dice, apply any flat modifiers, then apply armour rules.

### 7.2 Critical hits

On a critical hit:
- **Explode** the Primary Die — add its maximum value, roll it again, keep adding if you roll the maximum again.
- Critical hits **ignore armour** completely.
- Any riders (conditions, pushes, extra effects) can be boosted on crits at GM discretion.

### 7.3 Multiple attacks and rushed attacks

- The **first attack** each turn is normal.
- Each **additional attack** in that same turn is **rushed** 💨.
- Rushed attacks: roll your attack dice with **+1 Bane** (roll an extra die, keep the lowest).
- Enemies get **+1 Boon** on any saves against a rushed attack's effects.

Disadvantage stacks if you attack three or more times in one turn.

---

## 8. Armour and damage

| Armour type | Effect |
|-------------|--------|
| **Unarmoured** 👕 | Take full damage |
| **Medium armour** 🦺 | Take only dice damage — ignore flat modifiers |
| **Heavy armour** 🛡️ | Take half dice damage (round down) — ignore flat modifiers |

Critical hits and vulnerabilities **ignore armour**.

- **Resistance** 🛡️ — halve damage *after* armour.
- **Vulnerability** 💔 — double damage, or treat the hit as an automatic crit.

---

## 9. HP, Wounds and dying

### 9.1 Hit Points

Hit Points (HP) represent your capacity to take physical punishment. Damage reduces HP but HP cannot go below 0.

### 9.2 Wounds

When your HP drops to **0**:
1. Set HP to 0.
2. Gain **1 Wound** 🩸.
3. Gain the **Dying** condition ☠️.

**6 Wounds = death** (or a lower cap for a grittier game).

### 9.3 Dying

While Dying:
- You can only take **1 action per turn**.
- You lose Concentration on ongoing effects.
- Strenuous actions may force a **STR save**; on failure you gain **1 extra Wound**.

If you take damage while Dying:
- Gain **2 Wounds** — or **3 Wounds** if the hit is a critical.

> This makes it very dangerous to stay on the ground while enemies are still active.

### 9.4 Rests and healing

**Field Rest** (short rest) ⛺
- Spend Hit Dice to restore HP.
- Hit Dice spent are gone until a Safe Rest.

**Safe Rest** (long rest in safe conditions) 🛏️
- Restore all HP.
- Restore all spent Hit Dice.
- Restore all spell resources.
- Heal **1 Wound** 🩹.

Magical healing and class features restore HP or remove conditions according to their own rules.

---

## 10. Movement, range and conditions

### 10.1 Movement

- A typical character has **Speed 6**.
- Spending 1 action to Move lets you move up to your Speed.
- **Difficult terrain** usually halves movement for that path.

### 10.2 Range

| Band | Description |
|------|-------------|
| **Close** (melee) ⚔️ | Within reach |
| **Mid** | A short move away 🎯 |
| **Far** | Requires several moves or special abilities 🏹 |

Weapons and spells list their effective ranges in either system.

### 10.3 Conditions

| Condition | Effect |
|-----------|--------|
| **Prone** 🤕 | Bane to melee attacks you make; Boon to melee attacks against you |
| **Grappled** 🤼 | Speed 0; Banes on some tests; STR test to break free |
| **Restrained** ⛓️ | Speed 0; Banes on attacks and DEX saves |
| **Blinded** 🙈 | Bane on attacks and perception; others may have Boon to hit you |
| **Frightened** 😱 | Bane on rolls while the source of fear is visible |
| **Dazed** 😵 | Lose 1 action on your next turn |
| **Dying** ☠️ | 1 action per turn; extra Wounds from damage |

---

## 11. Monsters and minions

Monsters use the same core mechanics:
- Attributes (and Boon/Bane ratings if desired)
- HP, Wounds, armour type, conditions
- Attacks with their own damage dice and riders
- Saves as attribute tests

**Minions** are simplified enemies:
- Any hit that deals damage kills a minion.
- Minions do **not** gain Grit and usually do **not** crit.
- Groups of minions can be removed in batches when heroes deal big area damage.

Elite monsters can be given Grit and heroic reactions to feel closer to PCs.
